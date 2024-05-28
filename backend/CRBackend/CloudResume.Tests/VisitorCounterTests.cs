using Moq;
using Microsoft.Azure.Functions.Worker.Http;
using System.Net;
using System.Text;
using Azure.Core.Serialization;
using CloudResume.FunctionApp;
using CRRepository;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Options;
using ILogger = Microsoft.Extensions.Logging.ILogger;
using ILoggerFactory = Microsoft.Extensions.Logging.ILoggerFactory;



public class VisitorControllerTests
{
    private readonly BaseTestClass _baseTestClass = new BaseTestClass();

    [Fact]
    public async Task GetCounter_ReturnsOkResponse_WithCounterEntity()
    {
        var context = _baseTestClass.Context(out var request);

        // Arrange
        var mockVisitorRepository = new Mock<IVisitorRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var visitorController = new VisitorController(mockLoggerFactory.Object, mockVisitorRepository.Object);
        var expectedCounterEntity = new CounterEntity { Visits = 5 };
        mockVisitorRepository.Setup(v => v.GetCounterEntity()).ReturnsAsync(expectedCounterEntity);

        // Act
        var getCounterResponse = await visitorController.GetCounter(request.Object, context.Object);

        // Assert
        Assert.Equal(HttpStatusCode.OK, getCounterResponse.StatusCode);
        mockVisitorRepository.Verify(v => v.GetCounterEntity(), Times.Once);
    }

    [Fact]
    public async Task GetCounter_ReturnsInternalServerError_WhenRepositoryThrowsException()
    {
        var context = _baseTestClass.Context(out var request);

        // Arrange
        var mockVisitorRepository = new Mock<IVisitorRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var visitorController = new VisitorController(mockLoggerFactory.Object, mockVisitorRepository.Object);
        mockVisitorRepository.Setup(v => v.GetCounterEntity()).ThrowsAsync(new System.Exception());

        // Act
        var getCounterResponse = await visitorController.GetCounter(request.Object, context.Object);

        // Assert
        Assert.Equal(HttpStatusCode.InternalServerError, getCounterResponse.StatusCode);
        mockVisitorRepository.Verify(v => v.GetCounterEntity(), Times.Once);
    }

    // write a test to increment counter that verify internal server error when there is an issue with the repository
    [Fact]
    public async Task IncrementCounter_ReturnsInternalServerError_WhenRepositoryThrowsException()
    {
        var context = _baseTestClass.Context(out var request);

        // Arrange
        var mockVisitorRepository = new Mock<IVisitorRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var visitorController = new VisitorController(mockLoggerFactory.Object, mockVisitorRepository.Object);
        mockVisitorRepository.Setup(v => v.IncrementCounter()).ThrowsAsync(new System.Exception());

        // Act
        var incrementCounterResponse = await visitorController.IncrementCounter(request.Object, context.Object);

        // Assert
        Assert.Equal(HttpStatusCode.InternalServerError, incrementCounterResponse.StatusCode);
        mockVisitorRepository.Verify(v => v.IncrementCounter(), Times.Once);
    }

    [Fact]
    public async Task IncrementCounter_ReturnsOkResponse_WithUpdatedCounterEntity()
    {
        var context = _baseTestClass.Context(out var request);

        // Arrange
        var mockVisitorRepository = new Mock<IVisitorRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
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