using Azure;
using Azure.Data.Tables;

namespace CRRepository;

public class ProjectEntity: ITableEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Type { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? Status { get; set; }
    public string TechStacks { get; set; } 
    public string Tools { get; set; } 
    public string  Frameworks { get; set; } 
    public string? GithubLink { get; set; } 
    
    public string PartitionKey { get; set; }
    public string RowKey { get; set; }
    public DateTimeOffset? Timestamp { get; set; }
    public ETag ETag { get; set; }
}