using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using AutoMapper;
using CRModel;
using CRRepository;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace CloudResume.FunctionApp;

public class ProjectController
{
    private readonly IProjectRepository _projectRepository;
    private readonly IMapper _mapper;
    private readonly ILogger _logger;

    public ProjectController(ILoggerFactory loggerFactory, IProjectRepository projectRepository, IMapper mapper)
    {
        _projectRepository = projectRepository;
        _mapper = mapper;
        _logger = loggerFactory.CreateLogger<ProjectController>();
    }

    [Function("GetProjects")]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req,
        FunctionContext executionContext)
    {
        try
        {
            _logger.LogInformation("C# HTTP trigger to get All Projects processed a request.");
            var projects = await _projectRepository.GetAllProjects();
            
            List<Project> projectModels = new List<Project>();
            
            // convert each project to Project model and deserialize the tech-stacks, tools and frameworks
            foreach (var project in projects)
            {
                var entity = _mapper.Map<Project>(project);
                projectModels.Add(entity);
            }

            // return response
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(projectModels);
            return response;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
    
    // add a function to create a new project
    [Function("CreateProject")]
    public async Task<HttpResponseData> CreateProject([HttpTrigger(AuthorizationLevel.Function, "post")] 
        HttpRequestData req, [FromBody] Project project)
    {
        try
        {
            _logger.LogInformation($"Creating new Project request for {JsonSerializer.Serialize(project)}");
            var projectEntity = _mapper.Map<ProjectEntity>(project);
            var createdProject = await _projectRepository.CreateProject(projectEntity);
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(createdProject);
            return response;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return req.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
}