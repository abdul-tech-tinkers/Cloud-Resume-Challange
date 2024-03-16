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
    public IList<string> TechStack { get; set; } = new List<string>();
    public IList<string> Tools { get; set; } = new List<string>();
    public IList<string> Framework { get; set; } = new List<string>();
    public string? GithubLink { get; set; } 
}

public enum ProjectType
{
    Office,
    Personal,
}