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
            .ForMember(dest => dest.Type, opt => opt.MapFrom(src => (int)src.Type));
        
        
    }
    
    string Serialize(List<string> list)
    {
        return JsonSerializer.Serialize(list);
    }
}