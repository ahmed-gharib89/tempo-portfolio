"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data engineering
            opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-blue-500/20 border border-blue-500 text-blue-200 rounded-md p-4 mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a
                      href="mailto:contact@dataengineer.dev"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      contact@dataengineer.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
