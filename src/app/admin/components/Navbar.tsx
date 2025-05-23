'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MoreHorizontal,
  Plus,
  Search,
  Bell,
  Calendar,
  Store,
  AppWindow,
  Menu,
  X
} from 'lucide-react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine active tab based on current route
  const getActiveTab = () => {
    if (pathname?.startsWith('/admin/Leads')) return 'leads';
    if (pathname?.startsWith('/admin/Contact')) return 'contact';
    if (pathname?.startsWith('/admin/Project')) return 'projects';
    if (pathname?.startsWith('/admin/dashboard')) return 'dashboard';
    return 'dashboard'; // default
  };

  const activeTab = getActiveTab();

  const navLinks = [
    { name: 'Home', href: '/admin/dashboard', key: 'dashboard' },
    { name: 'Leads', href: '/admin/Leads', key: 'leads' },
    { name: 'Contacts', href: '/admin/Contact', key: 'contact' },
    { name: 'Accounts', href: '#', key: 'accounts' },
    { name: 'Services', href: '#', key: 'services' },
    { name: 'Projects', href: '/admin/Project', key: 'projects' },
  ];

  return (
    <nav className="bg-[#2f3640] text-white h-14 md:h-16 flex items-center px-4 justify-between shadow-sm sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CRM Logo */}
        <div className="flex items-center gap-1 font-semibold text-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png"
            alt="CRM"
            className="w-5 h-5"
          />
          <span className="hidden sm:inline">CRM</span>
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex gap-5 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`pb-0.5 ${activeTab === link.key ? 'border-b-2 border-white' : 'hover:text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Try CRM Button - Hidden on mobile */}
        <button className="hidden sm:block text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">
          <strong>Try CRM ✨</strong>
        </button>

        {/* Icons - Hide some on mobile */}
        <div className="hidden sm:flex items-center gap-2">
          <Plus className="cursor-pointer hover:text-gray-300" size={18} />
          <Search className="cursor-pointer hover:text-gray-300" size={18} />
          <Bell className="cursor-pointer hover:text-gray-300" size={18} />
          <Calendar className="cursor-pointer hover:text-gray-300" size={18} />
          <Store className="cursor-pointer hover:text-gray-300" size={18} />
        </div>

        {/* Profile Avatar - Always visible */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="avatar"
          className="w-7 h-7 rounded-full object-cover"
        />

        {/* App Window - Hidden on mobile */}
        <AppWindow className="hidden sm:block cursor-pointer hover:text-gray-300" size={18} />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[#2f3640] shadow-lg py-2 px-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`py-2 px-2 ${activeTab === link.key ? 'bg-[#3d4855] rounded-md' : 'hover:text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-600">
            <div className="flex items-center gap-3">
              <Plus className="cursor-pointer hover:text-gray-300" size={18} />
              <Search className="cursor-pointer hover:text-gray-300" size={18} />
              <Bell className="cursor-pointer hover:text-gray-300" size={18} />
            </div>
            <button className="text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">
              <strong>Try CRM</strong>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;