using System.Collections.Generic;
using System.Net;
using CRRepository;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace CloudResume.FunctionApp;

public class ProjectController
{
    private readonly IProjectRepository _projectRepository;
    private readonly ILogger _logger;

    public ProjectController(ILoggerFactory loggerFactory, IProjectRepository projectRepository)
    {
        _projectRepository = projectRepository;
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

            // return response
            var response = req.CreateResponse(HttpStatusCode.OK);
            //response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            await response.WriteAsJsonAsync(projects);
            return response;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
        
    }
}