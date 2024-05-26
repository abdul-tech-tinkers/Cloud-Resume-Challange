using Azure.Data.Tables;
using Microsoft.Extensions.Configuration;

namespace CRRepository;

public interface IProjectRepository
{
    Task<List<ProjectEntity>> GetAllProjects();
    Task<ProjectEntity> CreateProject(ProjectEntity projectEntity);
    Task<ProjectEntity> GetProjectById(string id);
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
    // get a project by id

    public async Task<ProjectEntity> GetProjectById(string id)
    {
        var client = await GetTableClient(_connectionString, "Projects");
        if (Guid.TryParse(id, out var projectId))
        {
            // Query the table where the id matches the provided id
            var query = client.QueryAsync<ProjectEntity>(p => p.Id == projectId);

            // Execute the query and get the first result
            await foreach (var project in query.AsPages())
            {
                if (project.Values.Any())
                {
                    return project.Values.First();
                }
            }
        }

        // Return null if no project was found
        return null;
    }

    // create a new prject
    public async Task<ProjectEntity> CreateProject(ProjectEntity projectEntity)
    {
        var client = await GetTableClient(_connectionString, "Projects");
        await client.AddEntityAsync(projectEntity);
        return projectEntity;
    }
}