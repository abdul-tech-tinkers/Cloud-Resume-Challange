export interface Project {
  id: string;
  name: string;
  description: string;
  type: number;
  startDate: Date;
  endDate: Date;
  status: string;
  techStacks: string[];
  tools: string[];
  frameworks: string[];
  githubLink: string;
}
