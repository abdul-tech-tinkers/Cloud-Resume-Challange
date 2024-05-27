using Xunit;
using Moq;
using Microsoft.Azure.Functions.Worker.Http;
using System.Net;
using System.Text;
using Azure.Core.Serialization;
using Castle.Core.Logging;
using CloudResume.FunctionApp;
using CRRepository;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ILogger = Microsoft.Extensions.Logging.ILogger;

public class VisitorControllerTests
{
    [Fact]
    public async Task GetCounter_ReturnsOkResponse_WithCounterEntity()
    {
        var context = Context(out var request);

        // Arrange
        var mockVisitorRepository = new Mock<IVisitorRepository>();
        var mockLoggerFactory = new Mock<Microsoft.Extensions.Logging.ILoggerFactory>();
        var mockLogger = new Mock<ILogger>();
        mockLoggerFactory.Setup(p => p.CreateLogger(It.IsAny<string>())).Returns(mockLogger.Object);

        var visitorController = new VisitorController(mockLoggerFactory.Object, mockVisitorRepository.Object);
        var expectedCounterEntity = new CounterEntity { Visits = 5 };

        mockVisitorRepository.Setup(v => v.GetCounterEntity()).ReturnsAsync(expectedCounterEntity);

        // Act
        var getCounterResponse = await visitorController.GetCounter(request.Object, context.Object);

        // Assert
        Assert.Equal(HttpStatusCode.OK, getCounterResponse.StatusCode);
        mockVisitorRepository.Verify(v => v.GetCounterEntity(), Times.Once);
    }

    private static Mock<FunctionContext> Context(out Mock<HttpRequestData> request)
    {
        var context = new Mock<FunctionContext>();
        var serviceProvider = new Mock<IServiceProvider>();
        var wrapper = new OptionsWrapper<WorkerOptions>(new WorkerOptions());
        wrapper.Value.Serializer = new JsonObjectSerializer();
        serviceProvider.Setup(p => p.GetService(typeof(IOptions<WorkerOptions>))).Returns(wrapper);
        
        context.SetupProperty(c => c.InstanceServices, serviceProvider.Object);

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
        return context;
    }

    [Fact]
    public async Task IncrementCounter_ReturnsOkResponse_WithUpdatedCounterEntity()
    {
        var context = Context(out var request);

        // Arrange
        var mockVisitorRepository = new Mock<IVisitorRepository>();
        var mockLoggerFactory = new Mock<Microsoft.Extensions.Logging.ILoggerFactory>();
        var mockLogger = new Mock<ILogger>();
        mockLoggerFactory.Setup(p => p.CreateLogger(It.IsAny<string>())).Returns(mockLogger.Object);

        var visitorController = new VisitorController(mockLoggerFactory.Object, mockVisitorRepository.Object);
        var expectedCounterEntity = new CounterEntity { Visits = 5 };

        mockVisitorRepository.Setup(v => v.GetCounterEntity()).ReturnsAsync(expectedCounterEntity);
        // Act
        var response = await visitorController.IncrementCounter(request.Object, context.Object);

        // Assert
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        mockVisitorRepository.Verify(v => v.IncrementCounter(), Times.Once);
    }
}