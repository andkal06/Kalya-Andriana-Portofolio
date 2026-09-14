import { ProfileData } from '../types';

/**
 * =========================================================================
 * PROFILE DATA
 * =========================================================================
 * To update your personal details, quote, or bio:
 * 1. Modify the fields in the `profileData` object below.
 * 2. Changes will automatically reflect across the Hero, About, and Footer sections.
 * =========================================================================
 */
export const profileData: ProfileData = {
  name: 'Kalya Andriana',
  roleTitle: 'Internet Engineering Student',
  tagline: 'Learning, building, and exploring across networks, AI, and cybersecurity',
  status: 'Active Undergraduate Student (5th Semester)',
  institution: 'Universitas Gadjah Mada',
  gpa: '3.91 / 4.00', // Rendered exclusively once in the About "Formal Education" card
  location: 'Yogyakarta, Indonesia',
  focusAreas: [
    'Cyber Security, IT Risk, IT GRC',
    'Python & Systems Development',
    'Computer Vision (YOLO) & Deep Learning',
    'Network Engineering & Protocols',
    'IoT Architectures'
  ],
  heroQuote: {
    text: '\u201cTo the star who listens and the dreams that are answered.\u201d',
    reflection: 'There is a particular kind of quiet that settles in after midnight, when the terminal is the only light left on, and the cursor blinks like something waiting to be told a secret. That is where most of what follows was built.'
  },
  aboutBio: 'Undergraduate engineer passionate about Cyber Security and Artificial Intelligence',
  storyParagraphs: [
    'I am an Internet Engineering Technology student at Universitas Gadjah Mada with a growing focus on Cybersecurity, particularly in digital forensics, SIEM, incident response, and security monitoring.',
    'I have also actively participated in CTF competitions, where I have explored areas such as web security, cryptography, steganography, digital forensics, and OSINT.',
    'Alongside cybersecurity, I have experience developing Computer Vision models during my internship at PT Nocola IoT Solution and working on projects involving IoT, networking, and embedded systems.'
  ],
  achievement: {
    id: 'isf-2026-semifinalist',
    title: 'Semifinalist',
    event: 'ISF 2026 Business Plan Competition',
    year: '2026',
    description: 'Recognized for technological viability, market strategy, and system architecture design in competitive national evaluation.'
  },
  quickStats: [
    {
      label: 'Academic Trajectory',
      value: 'Internet Engineering Student (5th Semester)',
      detail: 'Universitas Gadjah Mada'
    },
    {
      label: 'Applied Systems',
      value: '6+ Works',
      detail: 'Cyber Security, Artificial Intelligence, IoT Vaults & Network Pipelines'
    }
  ]
};
