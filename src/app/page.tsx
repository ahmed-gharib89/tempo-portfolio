import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createClient } from "../../supabase/server";
import ProfileHero from "@/components/profile-hero";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <ProfileHero />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
