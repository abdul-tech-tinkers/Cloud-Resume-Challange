using Azure.Data.Tables;
using Microsoft.Extensions.Configuration;

namespace CRRepository;

public class RepositoryBase
{
    protected async Task<TableClient> GetTableClient(string connectionString,string tableName)
    {
        try
        {
            var tableServiceClient = new TableServiceClient(connectionString);
            var tableClient = tableServiceClient.GetTableClient(tableName);
            await tableClient.CreateIfNotExistsAsync();

            return tableClient;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
       
    }
}

public interface IVisitorRepository
{
    Task<CounterEntity> IncrementCounter();
    Task<CounterEntity> GetCounterEntity();
}

public class VisitorRepository: RepositoryBase, IVisitorRepository
{
    private readonly string _connectionString;
    private readonly RepositoryBase _repositoryBase;
    private const string  TableName = "Counter";

    public VisitorRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("TableStorageConnectionString");
       
    }
    // add a function to increment the counter
    public async Task<CounterEntity> IncrementCounter()
    {
        // get the counter entity
        var counterEntity = await GetCounterEntity();
        counterEntity.Visits++;
        
        // update the counter entity
        return await UpdateCounterEntity(counterEntity);
    }

    private async Task<CounterEntity> UpdateCounterEntity(CounterEntity counterEntity)
    {
        var tableClient = await GetTableClient(_connectionString,TableName);
        
        // update the counter entity
        await tableClient.UpsertEntityAsync(counterEntity);

        return await GetCounterEntity();
    }

    // add a function to get the counter entity
    public async Task<CounterEntity> GetCounterEntity()
    {
        // create a new table client
        var tableClient = await GetTableClient(_connectionString, TableName);
        
        // get the counter entity
        var counterEntity = await tableClient.GetEntityAsync<CounterEntity>("Counter", "Counter");

        if (counterEntity?.Value == null)
        {
            // create a default counter entity with value 0
            var defaultEntry = new CounterEntity
            {
                RowKey = "Counter",
                Visits = 0,
                PartitionKey = "Counter"
            };
            await UpdateCounterEntity(defaultEntry);
            return defaultEntry;
        }
        
        return counterEntity.Value;
    }
}