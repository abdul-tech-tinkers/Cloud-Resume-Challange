namespace CRModel;

public class Project
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public ProjectType Type { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? Status { get; set; }
    public List<string> TechStacks { get; set; } = new();
    public List<string> Tools { get; set; } = new();
    public List<string> Frameworks { get; set; } = new();
    public string? GithubLink { get; set; } 
}

public enum ProjectType
{
    Office,
    Personal,
}