import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Data Pipeline Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  ETL Architecture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Big Data Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Data Warehouse Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Technical Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Data Engineering Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 hover:text-blue-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:contact@dataengineer.dev">
                  contact@dataengineer.dev
                </a>
              </li>
              <li className="flex items-center text-gray-400 hover:text-blue-400">
                <Linkedin className="w-4 h-4 mr-2" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center text-gray-400 hover:text-blue-400">
                <Github className="w-4 h-4 mr-2" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center text-gray-400 hover:text-blue-400">
                <Twitter className="w-4 h-4 mr-2" />
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} Alex Morgan | Senior Data Engineer. All rights
            reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
