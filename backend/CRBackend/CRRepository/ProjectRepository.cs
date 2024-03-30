using Azure.Data.Tables;
using Microsoft.Extensions.Configuration;

namespace CRRepository;

public interface IProjectRepository
{
    Task<List<ProjectEntity>> GetAllProjects();
}

public class ProjectRepository : IProjectRepository
{
    private readonly string _connectionString;

    public ProjectRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("TableStorageConnectionString");
    }
    
    

    // get all projects
    public async Task<List<ProjectEntity>> GetAllProjects()
    {
        var client = await GetTableClient();
        var projects = new List<ProjectEntity>();
        var query = client.QueryAsync<ProjectEntity>();
        await foreach (var project in query)
        {
            projects.Add(project);
        }

        return projects;
    }

    private async Task<TableClient> GetTableClient()
    {
        try
        {
            var tableServiceClient = new TableServiceClient(_connectionString);
            var tableClient = tableServiceClient.GetTableClient("Projects");
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