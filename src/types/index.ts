/**
 * TypeScript Type Definitions for Kalya Andriana's Portfolio
 * "Dreamy Sky at Golden Hour"
 */

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  category: 'work' | 'committee' | 'teaching';
  location?: string;
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  category?: 'ai' | 'iot' | 'software' | 'research' | 'cybersecurity';
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  category: 'cybersecurity' | 'programming' | 'ai' | 'networking' | 'tools';
  tag?: string;
  description?: string;
}

export interface SkillCategoryGroup {
  id: 'cybersecurity' | 'programming' | 'ai' | 'networking' | 'tools';
  label: string;
  sublabel: string;
  iconName?: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  status: string;
  gpa?: string;
  type?: 'university' | 'highschool';
  description?: string;
  relevantCoursework?: string[];
  honors?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'cybersecurity' | 'networking' | 'ai' | 'database';
  skills: string[];
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  handle: string;
  iconType: 'github' | 'linkedin' | 'email';
}

export interface ContactInfo {
  email: string;
  location: string;
  availabilityStatus: string;
  invitationNote: string;
  socialLinks: SocialLink[];
}

export interface QuickStat {
  label: string;
  value: string;
  detail: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year: string;
  description: string;
  category?: string;
  badge?: string;
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  tagline: string;
  status: string;
  institution: string;
  gpa: string;
  location: string;
  focusAreas: string[];
  heroQuote: {
    text: string;
    reflection: string;
  };
  aboutBio: string;
  storyParagraphs: string[];
  achievement: AchievementItem;
  quickStats: QuickStat[];
}
/**
 * =========================================================================
 * EXPERIENCE DATA (Work & Committees)
 * =========================================================================
 * To add a new experience item:
 * 1. Duplicate one of the objects below.
 * 2. Set `category` to either 'work' or 'committee' (or 'teaching').
 * 3. Fill in the id, role, organization, period, and description.
 * The ExperienceSection component will automatically render your new entry.
 * =========================================================================
 */

export const experienceData: ExperienceItem[] = [
  // --- Professional & Teaching Experience ---
  {
    id: 'nocola-ai-engineer',
    role: 'AI Engineer Intern',
    organization: 'PT Nocola IoT Solution',
    period: 'Jun 2026 – Jul 2026',
    category: 'work',
    location: 'Indonesia',
    description: 'Engineered state-of-the-art Computer Vision models based on YOLO architectures for industrial automated carton damage defect detection. Developed real-time driver fatigue and hazardous activity monitoring pipelines (detecting closed-eye drowsiness, yawning, mobile phone usage, and smoking) integrated into the Lihat.id safety telematics platform.',
    highlights: [
      'Trained and optimized custom YOLO models for multi-class industrial packaging defect classification.',
      'Constructed low-latency inference pipelines for driver safety monitoring under variable cabin lighting conditions.',
      'Collaborated with edge-IoT hardware teams to deploy model endpoints onto the Lihat.id surveillance platform.'
    ]
  },
  {
    id: 'ugm-programming-ta',
    role: 'Basic Programming Teaching Assistant',
    organization: 'Universitas Gadjah Mada',
    period: 'Jun 2026 –  now',
    category: 'work',
    location: 'Yogyakarta, Indonesia',
    description: 'Guided students in programming fundamentals using Python.',
    highlights: [
      'Assisted 25 students during practical programming sessions using Python',
      'Guided students in programming fundamentals, problem solving, and debugging',
      'Reviewed and graded students programming assignments and practical work'
    ]
  },
  {
    id: 'ugm-database-ta',
    role: 'Database Systems Teaching Assistant',
    organization: 'Universitas Gadjah Mada',
    period: 'Feb 2026 – Jun 2026',
    category: 'work',
    location: 'Yogyakarta, Indonesia',
    description: 'Assisted in conducting database laboratory sessions',
    highlights: [
      'Assisted in conducting database laboratory sessions for 26 undergraduate students',
      'Evaluated laboratory assignments to support students learning progress',
      'Assisted lecturers in maintaining smooth laboratory activities and practical assessments'
    ]
  },

  // --- Committee & Leadership Experience ---
  {
    id: 'nawasatya-secretary',
    role: 'Secretary',
    organization: 'Nawasatya, Universitas Gadjah Mada',
    period: '2024 – Present',
    category: 'committee',
    location: 'Yogyakarta, Indonesia',
    description: 'Responsible for managing official correspondence, meeting documentation, and administrative coordination for the organization.',
    highlights: [
      'Orchestrated official institutional correspondence, archives, and division administrative records.',
      'Managed executive meeting agendas, documentation, and inter-divisional alignment.'
    ]
  },
  {
    id: 'forkom-tri-secretary',
    role: 'Secretary',
    organization: 'Internet Engineering Technology Communication Forum (Forkom TRI), Universitas Gadjah Mada',
    period: '2024 – Present',
    category: 'committee',
    location: 'Yogyakarta, Indonesia',
    description: 'Responsible for managing internal communications, documentation, and coordination among students in the Internet Engineering Technology program.',
    highlights: [
      'Facilitated transparent departmental communication and student assembly documentation.',
      'Coordinated academic cohort initiatives, forums, and organizational administrative protocols.'
    ]
  },
  {
    id: 'nnc-4-secretary',
    role: 'Secretary',
    organization: 'National Networking Competition 4.0',
    period: 'Jul 2025 – Feb 2026',
    category: 'committee',
    location: 'Universitas Gadjah Mada',
    description: 'Spearheaded master administrative operations, formal correspondence, timeline governance, and official documentation across all phases of the flagship national networking championship.',
    highlights: [
      'Drafted and archived official cross-institutional correspondence, proposals, and regulatory handbooks.',
      'Chaired weekly inter-divisional alignment meetings, guaranteeing zero administrative bottlenecks.',
      'Streamlined digital filing systems for participant registration, scoring records, and credential verification.'
    ]
  },
  {
    id: 'garuda-hackathon-lo',
    role: 'Volunteer Liaison Officer',
    organization: 'Garuda Hackathon 6.0',
    period: 'Jul 2025',
    category: 'committee',
    location: 'Indonesia',
    description: 'Served as the primary liaison and delegate relations lead for nationwide hackathon participants, facilitating seamless technical briefings, onboarding, and mentor access.',
    highlights: [
      'Managed direct communications and support triage for competitors throughout the 48-hour event.',
      'Synchronized real-time schedule announcements, technical mentor desks, and emergency issue resolutions.'
    ]
  },
  {
    id: 'open-infra-days-secretariat',
    role: 'Secretariat Staff',
    organization: 'Indonesia Open Infra Days 2025',
    period: 'May 2025 – Jul 2025',
    category: 'committee',
    location: 'Yogyakarta, Indonesia',
    description: 'Coordinated executive logistics, VIP guest handling, and conference schedules for notable industry keynote speakers, open infrastructure engineers, and enterprise delegates.',
    highlights: [
      'Oversaw speaker hospitality, green room protocols, and technical presentation asset readiness.',
      'Supervised delegate verification desks ensuring rapid badge distribution for attendees.'
    ]
  },
  {
    id: 'nnc-3-sponsorship',
    role: 'Sponsorship Staff',
    organization: 'National Networking Competition 3.0',
    period: '2024 – 2025',
    category: 'committee',
    location: 'Universitas Gadjah Mada',
    description: 'Spearheaded enterprise outreach and partnership negotiations, securing corporate funding across sponsor enterprises to support national competition programs.',
    highlights: [
      'Secured substantial external sponsorship capital through strategic corporate pitch presentations.',
      'Curated tailored partnership value deliverables across physical booths, digital media, and branding collateral.',
      'Directed promotional roadshows and campus outreach initiatives.'
    ]
  }
];
