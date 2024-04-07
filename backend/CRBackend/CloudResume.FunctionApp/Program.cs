using CloudResume.FunctionApp;
using CRRepository;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.VisualBasic;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices((hostBuilder, services) =>
    {
        services.AddScoped<IProjectRepository, ProjectRepository>();
        services.AddScoped<IVisitorRepository, VisitorRepository>();
        services.AddAutoMapper(typeof(MappingProfile));
    })
    .Build();



host.Run();

