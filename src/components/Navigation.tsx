import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="h-10 w-10">
          <a href="#" className="block">
            <Image 
              src="/logo.png" 
              alt="Logo"
              width={40}
              height={40}
              className="h-full w-auto"
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url}
                  className="nav-link"
                >
                  <span className="text-highlight mr-1">{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="w-6 flex flex-col gap-1">
              <span className="block h-0.5 bg-foreground"></span>
              <span className="block h-0.5 bg-foreground"></span>
              <span className="block h-0.5 bg-foreground"></span>
            </div>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full text-center">
                <a 
                  href={link.url}
                  className="text-xl font-mono block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-highlight mr-2">{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full pt-4">
              <Button variant="outline" className="w-full border-highlight text-highlight hover:bg-highlight/10">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
