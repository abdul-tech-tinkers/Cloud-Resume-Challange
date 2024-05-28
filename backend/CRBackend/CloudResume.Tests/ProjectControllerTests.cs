using System.Net;
using AutoMapper;
using CloudResume.FunctionApp;
using CRModel;
using CRRepository;
using Moq;

namespace CloudResume.Tests;

public class ProjectControllerTests
{
    private readonly BaseTestClass _baseTestClass = new BaseTestClass();

    [Fact]
    public async Task Run_ReturnsOkResponse_WhenRepositoryOperationIsSuccessful()
    {
        var context = _baseTestClass.Context(out var request);

        var config = new MapperConfiguration(cfg => cfg.AddProfile(new MappingProfile()));
        var mapper = config.CreateMapper();
        
        var mockProjectRepository = new Mock<IProjectRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var projectController = new ProjectController(mockLoggerFactory.Object, mockProjectRepository.Object, mapper);

        var expectedProjects = new List<ProjectEntity> { new ProjectEntity { Id = Guid.NewGuid(), Name = "Test Project" } };
        mockProjectRepository.Setup(x => x.GetAllProjects()).ReturnsAsync(expectedProjects);

        var result = await projectController.GetProjects(request.Object, context.Object);

        Assert.Equal(HttpStatusCode.OK, result.StatusCode);
    }
    
    // write a test to verify internal server error when there is an issue with the repository
    [Fact]
    public async Task Run_ReturnsInternalServerError_WhenRepositoryThrowsException()
    {
        var context = _baseTestClass.Context(out var request);

        var config = new MapperConfiguration(cfg => cfg.AddProfile(new MappingProfile()));
        var mapper = config.CreateMapper();

        var mockProjectRepository = new Mock<IProjectRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var projectController = new ProjectController(mockLoggerFactory.Object, mockProjectRepository.Object, mapper);

        var expectedProjects = new List<ProjectEntity>
            { new ProjectEntity { Id = Guid.NewGuid(), Name = "Test Project" } };
        mockProjectRepository.Setup(x => x.GetAllProjects()).ThrowsAsync(new Exception());

        var result = await projectController.GetProjects(request.Object, context.Object);

        Assert.Equal(HttpStatusCode.InternalServerError, result.StatusCode);
    }
    
    [Fact]
    public async Task GetProjectById_ReturnsOkResponse_WhenRepositoryOperationIsSuccessful()
    {
        var context = _baseTestClass.Context(out var request);

        var config = new MapperConfiguration(cfg => cfg.AddProfile(new MappingProfile()));
        var mapper = config.CreateMapper();
        
        var mockProjectRepository = new Mock<IProjectRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var projectController = new ProjectController(mockLoggerFactory.Object, mockProjectRepository.Object, mapper);

        var id = Guid.NewGuid();
        var expectedProjects = new List<ProjectEntity> { new ProjectEntity { Id = id, Name = "Test Project" } };
        mockProjectRepository.Setup(x => x.GetProjectById(id.ToString())).ReturnsAsync(expectedProjects.First());

        var result = await projectController.GetProjectById(request.Object, id.ToString());

        Assert.Equal(HttpStatusCode.OK, result.StatusCode);
    }
    
    // write a test to verify internal server error when there is an issue with the repository
    [Fact]
    public async Task GetProjectById_ReturnsInternalServerError_WhenRepositoryThrowsException()
    {
        var context = _baseTestClass.Context(out var request);

        var config = new MapperConfiguration(cfg => cfg.AddProfile(new MappingProfile()));
        var mapper = config.CreateMapper();
        
        var mockProjectRepository = new Mock<IProjectRepository>();
        var mockLoggerFactory = _baseTestClass.MockLoggerFactory();
        var projectController = new ProjectController(mockLoggerFactory.Object, mockProjectRepository.Object, mapper);

        var id = Guid.NewGuid();
        var expectedProjects = new List<ProjectEntity> { new ProjectEntity { Id = id, Name = "Test Project" } };
        mockProjectRepository.Setup(x => x.GetProjectById(id.ToString())).ThrowsAsync(new Exception());

        var result = await projectController.GetProjectById(request.Object, id.ToString());

        Assert.Equal(HttpStatusCode.InternalServerError, result.StatusCode);
    }
    
   
}