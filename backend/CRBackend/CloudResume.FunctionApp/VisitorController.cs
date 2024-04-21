using System.Collections.Generic;
using System.Net;
using CRRepository;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace CloudResume.FunctionApp;

public class VisitorController
{
    private readonly IVisitorRepository _visitorRepository;
    private readonly ILogger _logger;

    public VisitorController(ILoggerFactory loggerFactory, IVisitorRepository visitorRepository)
    {
        _visitorRepository = visitorRepository;
        _logger = loggerFactory.CreateLogger<VisitorController>();
    }

    [Function("GetCounter")]
    public async Task<HttpResponseData> GetCounter([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req,
        FunctionContext executionContext)
    {
        try
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var visitor = await _visitorRepository.GetCounterEntity();
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteStringAsync(visitor.Visits.ToString());
            return response;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return req.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
    
    [Function("IncrementCounter")]
    public async Task<HttpResponseData> IncrementCounter([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
        FunctionContext executionContext)
    {
        try
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var updatedCounterEntity = await _visitorRepository.IncrementCounter();
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteStringAsync(updatedCounterEntity.Visits.ToString());
            return response;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return req.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
}