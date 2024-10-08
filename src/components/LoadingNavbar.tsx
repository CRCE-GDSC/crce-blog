"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  ArrowLeft,
  Home,
  Book,
  Search,
  Users,
  GraduationCap,
  NewspaperIcon,
  Calendar,
  Briefcase,
  Phone,
  MoveRight,
  Globe,
  Info,
  School,
  UserPlus,
  UserCheck,
  Target,
  Building2,
  FileText,
  FileCheck2,
  BookOpen,
  FileSignature,
  ClipboardCheck,
  SquarePlus,
  Award,
  FlaskConical,
  BadgeCheck,
  Library,
  MessageSquare,
  FolderGit2,
  Bell,
  MessageCircleWarning,
  Cpu,
  CircuitBoard,
  Cog,
  Atom,
  Code2,
  CreditCard,
  Images,
} from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface DropdownContent {
  [key: string]: DropdownItem[];
}

const dropdownContent: DropdownContent = {};

const LoadingNavbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown(null);
    } else {
      setDropdown(menu);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenu(null);
  };

  const openMobileSubmenu = (menu: string) => {
    setMobileSubmenu(menu);
  };

  const closeMobileSubmenu = () => {
    setMobileSubmenu(null);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 z-50 hidden w-full bg-gray-800 font-semibold text-white md:block">
        <div className="flex flex-col px-20 ">
          <div className="border-t border-gray-700"></div>
          <div className="flex w-full h-fit py-2">
            <div className="flex w-1/4 items-center justify-center">
              <Link href="/home/home-page">
                <Image
                  src="/clogo.png"
                  alt="SRM Logo"
                  width={120}
                  height={500}
                  className="scale-x-125"
                />
              </Link>
            </div>
            <div className="flex w-3/4 flex-col pb-1.5">
              <div className="flex justify-end space-x-8 py-4 pr-14 ">
                <Link href={"/signin"}>
                  <button className="flex items-center text-lg transition duration-300 hover:text-yellow-300">
                    <span>Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-gray-900 font-semibold capitalize text-white md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/home/home-page">
            <Image
              src="/clogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 transition-colors hover:bg-gray-800"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-900 capitalize text-white transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between pb-6">
            <Image
              src="/clogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
            <button
              className="p-2 transition-colors hover:bg-gray-800"
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Menu Items */}
          <Link href={"/signin"}>
            <button className="flex items-center justify-between w-full border-b border-gray-700 py-3 pb-2 text-left text-lg font-medium transition-colors hover:bg-gray-800">
              <span>Sign In</span>
            </button>
          </Link>

        </div>
      </div>
      {/* Mobile Submenu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-800 capitalize text-white transition-transform duration-300 ease-in-out md:hidden ${
          mobileSubmenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {mobileSubmenu && dropdownContent[mobileSubmenu] && (
          <div className="flex flex-col p-4">
            <button
              className="flex items-center pb-6 text-lg font-medium"
              onClick={closeMobileSubmenu}
            >
              <ArrowLeft size={24} className="mr-2" />
              Back
            </button>
            <h2 className="pb-4 text-2xl font-bold">
              {mobileSubmenu.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            {dropdownContent[mobileSubmenu].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-3 border-b border-gray-700 py-3 pb-2 text-lg transition-colors hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LoadingNavbar;
