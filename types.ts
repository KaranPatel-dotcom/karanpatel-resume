export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  gpa?: string;
  location: string;
  period: string;
  details: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  link?: string;
}

export interface RecommendationItem {
  name: string;
  title: string;
  relation: string;
  content: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  certifications: Certification[];
  recommendations: RecommendationItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}