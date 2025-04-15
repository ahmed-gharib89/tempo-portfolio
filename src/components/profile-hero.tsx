import { Database, GitMerge, LineChart } from "lucide-react";
import { ProfileHeroButton, ScrollDownButton } from "./profile-hero-button";

export default function ProfileHero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-purple-900/20 opacity-90" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=dataengineer&backgroundColor=b6e3f4"
                    alt="Profile"
                    className="w-full h-full object-cover bg-gray-800"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                  <Database className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Alex Morgan
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                  Senior Data Engineer
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                I build scalable, efficient data pipelines and analytics
                infrastructure that transform raw data into valuable business
                insights.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
                  <LineChart className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Data Pipelines</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
                  <GitMerge className="w-5 h-5 text-blue-400 mr-2" />
                  <span>ETL Architecture</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
                  <Database className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Big Data Solutions</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <ProfileHeroButton
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
                  elementId="contact"
                >
                  Contact Me
                </ProfileHeroButton>

                <ProfileHeroButton
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-900/20 px-6 py-3 rounded-lg text-lg"
                  elementId="projects"
                >
                  View Projects
                </ProfileHeroButton>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ScrollDownButton elementId="projects" />
          </div>
        </div>
      </div>
    </div>
  );
}
