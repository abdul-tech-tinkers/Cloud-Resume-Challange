using System.Text.Json;
using CRRepository;
using AutoMapper;
using CRModel;
namespace CloudResume.FunctionApp;



public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Project, ProjectEntity>()
            .ForMember(dest => dest.TechStacks, opt => opt.MapFrom(src => Serialize(src.TechStacks)))
            .ForMember(dest => dest.Tools, opt => opt.MapFrom(src => Serialize(src.Tools)))
            .ForMember(dest => dest.Frameworks, opt => opt.MapFrom(src => Serialize(src.Frameworks)))
            .ForMember(dest => dest.Type, opt => opt.MapFrom(src => (int)src.Type))
            .ForMember(dest => dest.PartitionKey, opt => opt.MapFrom(src => "Project"))
            .ForMember(dest => dest.RowKey, opt => opt.MapFrom(src => Guid.NewGuid().ToString()))
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()))
            .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => DateTime.SpecifyKind(src.StartDate, DateTimeKind.Utc)))
            .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => DateTime.SpecifyKind(src.EndDate, DateTimeKind.Utc)));
        
        //create map for ProjectEntity to Project
        CreateMap<ProjectEntity, Project>()
            .ForMember(dest => dest.TechStacks, opt => opt.MapFrom(src => DeSerialize(src.TechStacks)))
            .ForMember(dest => dest.Tools, opt => opt.MapFrom(src => DeSerialize(src.Tools)))
            .ForMember(dest => dest.Frameworks, opt => opt.MapFrom(src => DeSerialize(src.Frameworks)))
            .ForMember(dest => dest.Type, opt => opt.MapFrom(src => ConvertToType(src.Type)));

    }

    private ProjectType ConvertToType(int srcType)
    {
        return srcType switch
        {
            0 => ProjectType.Office,
            1 => ProjectType.Personal,
            _ => ProjectType.Office
        };
    }

    string Serialize(List<string> list)
    {
        return JsonSerializer.Serialize(list);
    }
    
    List<string> DeSerialize(string str)
    {
        return JsonSerializer.Deserialize<List<string>>(str);
    }
}