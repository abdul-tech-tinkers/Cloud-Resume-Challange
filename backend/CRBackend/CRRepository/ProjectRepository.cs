using Azure.Data.Tables;
using Microsoft.Extensions.Configuration;

namespace CRRepository;

public interface IProjectRepository
{
    Task<List<ProjectEntity>> GetAllProjects();
    Task<ProjectEntity> CreateProject(ProjectEntity projectEntity);
}

public class ProjectRepository : RepositoryBase, IProjectRepository
{
    private readonly string _connectionString;

    public ProjectRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("TableStorageConnectionString");
    }

    // get all projects
    public async Task<List<ProjectEntity>> GetAllProjects()
    {
        var client = await GetTableClient(_connectionString, "Projects");
        var projects = new List<ProjectEntity>();
        var query = client.QueryAsync<ProjectEntity>();
        await foreach (var project in query)
        {
            projects.Add(project);
        }

        return projects;
    }
    
    // create a new prject
    public async Task<ProjectEntity> CreateProject(ProjectEntity projectEntity)
    {
        var client = await GetTableClient(_connectionString, "Projects");
        await client.AddEntityAsync(projectEntity);
        return projectEntity;
    }

    
}