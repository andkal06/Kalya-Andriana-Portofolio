import { ExperienceItem } from '../types';

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
    description:
      'Developed and trained Computer Vision models using YOLO for automated carton damage detection and driver safety monitoring. Worked on models for detecting driver fatigue and unsafe activities such as closed eyes, yawning, mobile phone usage, and smoking, which were later integrated into the Lihat.id platform.'
  },
  {
    id: 'ugm-programming-ta',
    role: 'Basic Programming Teaching Assistant',
    organization: 'Universitas Gadjah Mada',
    period: 'Jun 2026 –  now',
    category: 'work',
    location: 'Yogyakarta, Indonesia',
    description:
      'Assisted students in learning programming fundamentals using Python during practical sessions.',
  },
  {
    id: 'ugm-database-ta',
    role: 'Database Systems Teaching Assistant',
    organization: 'Universitas Gadjah Mada',
    period: 'Feb 2026 – Jun 2026',
    category: 'work',
    location: 'Yogyakarta, Indonesia',
    description:
      'Assisted in conducting database laboratory sessions and supported students during practical exercises.'
  },

  // --- Committee & Leadership Experience ---
  {
    id: 'nawasatya-secretary',
    role: 'Secretary',
    organization: 'Nawasatya, Universitas Gadjah Mada',
    period: '2025 – Present',
    category: 'committee',
    location: 'Yogyakarta, Indonesia',
    description:
      'Responsible for managing official correspondence, meeting documentation, and administrative coordination for the organization.',
  },
  {
    id: 'forkom-tri-secretary',
    role: 'Secretary',
    organization: 'Internet Engineering Technology Communication Forum (Forkom TRI), Universitas Gadjah Mada',
    period: '2024 – Present',
    category: 'committee',
    location: 'Yogyakarta, Indonesia',
    description:
      'Managed administrative tasks, internal communication, documentation, and coordination among students in the Internet Engineering Technology program',
  },
  {
    id: 'nnc-4-secretary',
    role: 'Secretary',
    organization: 'National Networking Competition 4.0',
    period: 'Jul 2025 – Feb 2026',
    category: 'committee',
    location: 'Universitas Gadjah Mada',
    description:
      'Handled administrative work, official correspondence, documentation, and coordination throughout the preparation and execution of the national networking competition.',
  },
  {
    id: 'garuda-hackathon-lo',
    role: 'Volunteer Liaison Officer',
    organization: 'Garuda Hackathon 6.0',
    period: 'Jul 2025',
    category: 'committee',
    location: 'Indonesia',
    description:
      'Supported participants during the hackathon by handling communication, providing information, and helping coordinate participant needs throughout the event.',
  },
  {
    id: 'open-infra-days-secretariat',
    role: 'Secretariat Staff',
    organization: 'Indonesia Open Infra Days 2025',
    period: 'May 2025 – Jul 2025',
    category: 'committee',
    location: 'Yogyakarta, Indonesia',
    description:
      'Supported the secretariat team in managing speakers, attendees, event documentation, and onsite coordination during the conference.',
  },
  {
    id: 'nnc-3-sponsorship',
    role: 'Sponsorship Staff',
    organization: 'National Networking Competition 3.0',
    period: 'Sep 2024 – Feb 2025',
    category: 'committee',
    location: 'Universitas Gadjah Mada',
    description:
      'Worked on sponsorship outreach and partnership coordination to support the funding and implementation of the national networking competition.',
  }
];
