import { AchievementItem } from '../types';

/**
 * =========================================================================
 * ACHIEVEMENTS & RECOGNITION DATA
 * =========================================================================
 * To add a new achievement:
 * 1. Add a new object to the `achievementsData` array below.
 * 2. Specify id, title, event, year, description, and optional badge or category.
 * The Achievements section component will automatically render it.
 * =========================================================================
 */
export const achievementsData: AchievementItem[] = [
  {
    id: 'isf-2026-semifinalist',
    title: 'Semifinalist',
    event: 'ISF 2026 Business Plan Competition',
    year: '2026',
    category: 'Competition & Innovation',
    badge: 'National Finalist Stage',
    description:
      'Recognized for exceptional technological viability, financial modeling, and software/system architecture design in a highly competitive national innovation evaluation.'
  }
];
