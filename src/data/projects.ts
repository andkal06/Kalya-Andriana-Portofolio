import { ProjectItem } from '../types';

/**
 * =========================================================================
 * PROJECTS DATA
 * =========================================================================
 * To add a new project:
 * 1. Add a new object to the `projectsData` array below.
 * 2. Specify id, title, role, period, description, tags, and optional link.
 * The ProjectsSection component will automatically map and display it.
 * =========================================================================
 */
export const projectsData: ProjectItem[] = [
  {
    id: 'hacktrace-network-forensic',
    title: 'Web Application Compromise & Remote Code Execution Investigation',
    role: 'DFIR Analyst',
    period: 'Sep 2026',
    category: 'cybersecurity',
    description:
      'Investigated a simulated web application compromise using network forensic analysis of a PCAP file. Reconstructed the attack chain from reconnaissance and SQL injection attempts to web shell deployment, remote code execution, reverse shell activity, and post exploitation using Wireshark and network traffic analysis.',
    tags: ['Cybersecurity', 'Digital Forensic', 'Incident Response', 'Wireshark', 'Packet Inspection'],
    highlights: [
      'Analyzed 17,508 network packets and reconstructed the incident timeline from attacker reconnaissance to post exploitation.',
      'Identified Indicators of Compromise including attacker IPs, malicious web shell activity, reverse shell communication, suspicious user agents, and attack payloads.',
      'Developed incident response recommendations covering immediate containment.'
    ],
    link: 'coming soon'
  },
  {
    id: 'fertilizer-prediction-ai',
    title: 'AI-Based Fertilizer Type Prediction Model',
    role: 'AI Engineer & Model Architect',
    period: 'May 2026',
    category: 'ai',
    description:
      'Engineered an intelligent Deep Learning classifier that accurately forecasts optimal agricultural fertilizer requirements based on multi variate soil chemistry (N-P-K levels, pH, moisture) and environmental factors to maximize crop yields.',
    tags: ['Deep Learning', 'Python', 'Neural Networks', 'Agriculture AI', 'Data Science'],
    highlights: [
      'Designed a multi layer neural network architecture trained on agronomic nutrient datasets.',
      'Achieved robust multi class accuracy predicting targeted mineral fertilizer formulations.',
      'Implemented data preprocessing pipelines addressing soil sample variability and outliers.'
    ],
    link: 'https://github.com/andkal06/AI-Fertilizer-Recommendation-model'
  },
  {
    id: 'smart-safe-deposit-box',
    title: 'Smart Safe Deposit Box',
    role: 'Hardwarer Engineer',
    period: 'Apr 2026 – Jun 2026',
    category: 'iot',
    description:
      'Developed an IoT enabled bank vault security solution utilizing multi factor biometric and digital credential authentication, physical tamper detection sensors, and automated encrypted remote alerts.',
    tags: ['IoT Systems', 'Microcontrollers', 'Embedded C/C++', 'Sensors'],
    highlights: [
      'Engineered a dual layer credential gateway pairing hardware keypads with secondary verification.',
      'Integrated sensors with immediate push notification alerting.'
    ],
    link: 'https://github.com/andkal06'
  },
  {
    id: 'hydrovia-monitoring',
    title: 'Hydrovia: Water Usage Monitoring & Optimization',
    role: 'Ideator & System Integrator',
    period: 'Oct 2025 – Dec 2025',
    category: 'iot',
    description:
      'Architected an end to end intelligent water conservation and monitoring platform equipped with pressure pipe leak detection, motorized smart shutoff valves, and real time analytics.',
    tags: ['IoT Telemetry', 'Systems Integration', 'Python', 'Sensory Hardware', 'Sustainability'],
    highlights: [
      'Built automated leak detection algorithms flagging pressure drops.',
      'Deployed motorized actuator valves capable of remote or automatic emergency shutoff.',
      'Integrated real time consumption dashboards displaying daily flow metrics and anomaly flags.'
    ],
    link: 'https://github.com/andkal06'
  },
  {
    id: 'ecg-federated-learning',
    title: 'Federated Learning for ECG Classification',
    role: 'Machine Learning Engineer',
    period: '2026',
    category: 'ai',
    description:
      'Implemented a Federated Learning approach for ECG classification using the MIT-BIH Arrhythmia Database. The project simulates multiple healthcare clients training a shared model through FedAvg without directly sharing their local ECG data.',
    tags: [
      'Federated Learning',
      'Machine Learning',
      'Python',
      'PyTorch',
      'FedAvg',
      'ECG',
      'MIT-BIH'
    ],
    highlights: [
      'Implemented the FedAvg algorithm from scratch to simulate collaborative training across multiple clients.',
      'Distributed ECG data across three simulated clients representing different healthcare institutions.',
      'Trained and evaluated a shared model while keeping the original ECG data on each local client.'
    ],
    link: 'https://github.com/andkal06/ECG-FEDERATED-LEARNING-'
  },
  {
    id: 'ctf-writeups',
    title: 'Cybersecurity CTF Write-Ups',
    role: 'Security Researcher',
    period: '2026',
    category: 'cybersecurity',
    description:
      'A collection of write-ups documenting solutions and analysis from cybersecurity Capture The Flag challenges. The repository covers hands-on problem solving across areas such as digital forensics, cryptography, steganography, OSINT, and web security.',
    tags: [
      'Cybersecurity',
      'CTF',
      'Digital Forensics',
      'Cryptography',
      'Steganography',
      'OSINT',
      'Web Security'
    ],
    highlights: [
      'Documented the investigation and solution process for multiple cybersecurity challenges.',
      'Applied practical techniques in digital forensics, cryptography, steganography, OSINT, and web security.',
      'Worked collaboratively with team members to analyze challenges and document reproducible solutions.'
    ],
    link: 'https://github.com/andkal06/CTF-Write-Up-'
  },
  {
    id: 'unsafe-behavior-yolo',
    title: 'Driver Unsafe Behavior Detection',
    role: 'Computer Vision Engineer',
    period: '2026',
    category: 'ai',
    description:
      'Developed a YOLO based Computer Vision system for detecting unsafe driver behaviors from camera footage, including mobile phone usage and smoking. The project focuses on real time object detection for driver safety monitoring.',
    tags: [
      'Computer Vision',
      'YOLO',
      'Deep Learning',
      'Python',
      'Object Detection',
      'Driver Safety'
    ],
    highlights: [
      'Trained YOLO models to detect mobile phone usage and smoking while driving.',
      'Prepared and processed image datasets for multi-class object detection.',
      'Evaluated model predictions and visualized detection results using bounding boxes.'
    ],
    link: 'https://github.com/andkal06/Unsafe-Behavior-Detection-Using-Yolo-'
  }
];