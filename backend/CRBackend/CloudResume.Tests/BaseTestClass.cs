using System.Text;
using Azure.Core.Serialization;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;

public class BaseTestClass
{
    public Mock<ILoggerFactory> MockLoggerFactory()
    {
        var mockLoggerFactory = new Mock<Microsoft.Extensions.Logging.ILoggerFactory>();
        var mockLogger = new Mock<ILogger>();
        mockLoggerFactory.Setup(p => p.CreateLogger(It.IsAny<string>())).Returns(mockLogger.Object);
        return mockLoggerFactory;
    }

    public Mock<FunctionContext> Context(out Mock<HttpRequestData> request)
    {
        var context = new Mock<FunctionContext>();
        var serviceProvider = GetServiceProvider();
        context.SetupProperty(c => c.InstanceServices, serviceProvider.Object);
        GetRequestObject(out request, context);
        return context;
    }

    public static void GetRequestObject(out Mock<HttpRequestData> request, Mock<FunctionContext> context)
    {
        var byteArray = Encoding.ASCII.GetBytes("test");
        var bodyStream = new MemoryStream(byteArray);
        request = new Mock<HttpRequestData>(context.Object);
        request.Setup(r => r.Body).Returns(bodyStream);
        request.Setup(r => r.CreateResponse()).Returns(() =>
        {
            var response = new Mock<HttpResponseData>(context.Object);
            response.SetupProperty(r => r.Headers, new HttpHeadersCollection());
            response.SetupProperty(r => r.StatusCode);
            response.SetupProperty(r => r.Body, new MemoryStream());
            return response.Object;
        });
    }

    public Mock<IServiceProvider> GetServiceProvider()
    {
        var serviceProvider = new Mock<IServiceProvider>();
        var wrapper = new OptionsWrapper<WorkerOptions>(new WorkerOptions());
        wrapper.Value.Serializer = new JsonObjectSerializer();
        serviceProvider.Setup(p => p.GetService(typeof(IOptions<WorkerOptions>))).Returns(wrapper);
        return serviceProvider;
    }
}