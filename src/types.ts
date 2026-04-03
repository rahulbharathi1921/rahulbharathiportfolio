export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  color: 'primary' | 'secondary' | 'tertiary';
  github?: string;
}

export interface Skill {
  domain: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}
