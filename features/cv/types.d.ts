interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  website: string;
}

interface SkillCategory {
  category: string;
  items: string[];
}

interface Experience {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

interface Education {
  degree: string;
  school: string;
  date: string;
}
