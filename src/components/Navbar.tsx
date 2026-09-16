import React from 'react';
import { Sidebar } from './Sidebar';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

/**
 * Navbar component re-exports the modernized vertical Sidebar component.
 */
export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return <Sidebar onNavigate={onNavigate} />;
};

export { Sidebar };
