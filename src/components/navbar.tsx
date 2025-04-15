"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { Database, Menu, X } from "lucide-react";
import UserProfile from "./user-profile";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };

    fetchUser();
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-white"
        >
          <Database className="w-6 h-6 text-blue-500 mr-2" />
          <span>DataEngineer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {!loading && user ? (
              <>
                <Link href="/dashboard">
                  <Button
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Dashboard
                  </Button>
                </Link>
                <UserProfile />
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white"
                >
                  Sign In
                </Link>
                <Link href="/sign-up">
                  <Button
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-700 flex flex-col space-y-3">
              {!loading && user ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      variant="default"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Dashboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      variant="default"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
