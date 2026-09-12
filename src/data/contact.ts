import { ContactInfo } from '../types';

/**
 * =========================================================================
 * CONTACT & SOCIAL LINKS DATA
 * =========================================================================
 * To add or edit contact channels:
 * 1. Update the email, location, or add new items to `socialLinks`.
 * 2. The Contact/Footer section will automatically render the channels.
 * =========================================================================
 */
export const contactData: ContactInfo = {
  email: 'kalyaandriana24@gmail.com',
  location: 'Yogyakarta, Indonesia',
  availabilityStatus: 'Open for internships & engineering roles',
  invitationNote:
    'Open to inquiries regarding research, internships, engineering roles, and technical collaborations in Cyber security, computer vision, network engineering, and systems development.',
  socialLinks: [
    {
      name: 'GitHub',
      label: 'github.com/andkal06',
      url: 'https://github.com/andkal06',
      handle: '@andkal06',
      iconType: 'github'
    },
    {
      name: 'LinkedIn',
      label: 'linkedin.com/in/kalya-andriana',
      url: 'https://linkedin.com/in/kalya-andriana',
      handle: 'kalya-andriana',
      iconType: 'linkedin'
    }
  ]
};
