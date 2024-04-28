export interface Project {
  Id: string;
  Name: string;
  Description: string;
  Type: number;
  StartDate: Date;
  EndDate: Date;
  Status: string;
  TechStacks: string[];
  Tools: string[];
  Frameworks: string[];
  GithubLink: string;
}
