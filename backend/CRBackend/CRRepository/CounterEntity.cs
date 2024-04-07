using Azure;
using Azure.Data.Tables;

namespace CRRepository;

public class CounterEntity: ITableEntity
{
    public string PartitionKey { get; set; } = "Counter";
    public string RowKey { get; set; }
    public DateTimeOffset? Timestamp { get; set; }
    public ETag ETag { get; set; }
    
    public int Visits { get; set; }
}