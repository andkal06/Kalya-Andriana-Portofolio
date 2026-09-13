import { SkillItem, SkillCategoryGroup } from '../types';

/**
 * =========================================================================
 * SKILLS & TECHNICAL COMPETENCIES DATA
 * =========================================================================
 * Categorized strictly as requested:
 * 1. Cyber Security
 * 2. Programming
 * 3. AI
 * 4. Networking
 * 5. Tools
 * =========================================================================
 */
export const skillsData: SkillItem[] = [
  // --- 1. Cyber Security ---
  { name: 'Digital Forensic', category: 'cybersecurity', tag: 'Forensics' },
  { name: 'Security Monitoring', category: 'cybersecurity', tag: 'Defensive Ops' },
  { name: 'Log Analysis', category: 'cybersecurity', tag: 'Threat Intel' },
  { name: 'Security Incident Investigation', category: 'cybersecurity', tag: 'Incident Response' },
  { name: 'OWASP Top 10', category: 'cybersecurity', tag: 'AppSec' },
  { name: 'Cryptography & Steganography', category: 'cybersecurity', tag: 'Crypto' },
  { name: 'OSINT', category: 'cybersecurity', tag: 'Reconnaissance' },
  { name: 'IT Governance, Risk & Compliance', category: 'cybersecurity', tag: 'GRC' },

  // --- 2. Programming ---
  { name: 'JavaScript', category: 'programming', tag: 'Frontend/Node' },
  { name: 'Python', category: 'programming', tag: 'AI/Scripting' },
  { name: 'C++', category: 'programming', tag: 'Systems/Embedded' },
  { name: 'Bash Scripting', category: 'programming', tag: 'Automation' },

  // --- 3. AI ---
  { name: 'Computer Vision', category: 'ai', tag: 'Vision AI' },
  { name: 'Image Classification', category: 'ai', tag: 'CNN / ResNet' },
  { name: 'Model Training & Evaluation', category: 'ai', tag: 'Pipelines' },
  { name: 'Machine Learning', category: 'ai', tag: 'Supervised/Unsupervised' },
  { name: 'Deep Learning', category: 'ai', tag: 'Neural Networks' },
  { name: 'Federated Learning', category: 'ai', tag: 'Privacy AI' },

  // --- 4. Networking ---
  { name: 'Routing & Switching', category: 'networking', tag: 'L2/L3' },
  { name: 'Subnetting', category: 'networking', tag: 'IPv4/IPv6' },
  { name: 'VLANs', category: 'networking', tag: 'Segmentation' },
  { name: 'Network Topology Design', category: 'networking', tag: 'Architecture' },
  { name: 'MikroTik Router Configuration', category: 'networking', tag: 'RouterOS' },

  // --- 5. Tools ---
  { name: 'GitHub', category: 'tools', tag: 'Version Control' },
  { name: 'VS Code', category: 'tools', tag: 'IDE / Editor' },
  { name: 'Google Colab', category: 'tools', tag: 'AI Workspace' },
  { name: 'Burp Suite', category: 'tools', tag: 'Web Pentest' },
  { name: 'OWASP ZAP', category: 'tools', tag: 'Vulnerability Scan' },
  { name: 'Wireshark', category: 'tools', tag: 'Packet Analysis' },
  { name: 'tshark', category: 'tools', tag: 'CLI Packet Analysis' },
  { name: 'Nmap', category: 'tools', tag: 'Network Discovery' },
  { name: 'FTK Imager', category: 'tools', tag: 'Digital Forensics' },
  { name: 'CyberChef', category: 'tools', tag: 'Data Decoding' },
  { name: 'Ghidra', category: 'tools', tag: 'Reverse Engineering' },
  { name: 'Binwalk', category: 'tools', tag: 'Firmware Extraction' },
  { name: 'Wazuh', category: 'tools', tag: 'SIEM & XDR' },
  { name: 'Node-RED', category: 'tools', tag: 'IoT Flow Engine' },
  { name: 'Cisco Packet Tracer', category: 'tools', tag: 'Network Simulation' },
  { name: 'Aperi\'Solve', category: 'tools', tag: 'Steganography Analysis' }
];

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: 'cybersecurity',
    label: 'Cyber Security',
    sublabel: 'Forensics, incident investigation, GRC & defensive operations',
    skills: skillsData.filter((s) => s.category === 'cybersecurity')
  },
  {
    id: 'programming',
    label: 'Programming',
    sublabel: 'Systems languages, web technologies, and automation scripts',
    skills: skillsData.filter((s) => s.category === 'programming')
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    sublabel: 'Computer vision, neural modeling, and federated intelligence',
    skills: skillsData.filter((s) => s.category === 'ai')
  },
  {
    id: 'networking',
    label: 'Networking',
    sublabel: 'Routing & switching, VLAN segmentation, and MikroTik RouterOS',
    skills: skillsData.filter((s) => s.category === 'networking')
  },
  {
    id: 'tools',
    label: 'Software & Tools Validation',
    sublabel: 'Security auditing, digital forensics, packet inspection & development suites',
    skills: skillsData.filter((s) => s.category === 'tools')
  }
];
