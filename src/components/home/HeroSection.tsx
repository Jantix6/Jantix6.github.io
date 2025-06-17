import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

const HeroSection = ({ onViewProjects, onContactClick }: HeroSectionProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-base sm:text-lg lg:text-xl text-purple-200 mb-4 sm:mb-6 leading-relaxed">
                Game programmer specializing in systems and gameplay programming, focused on 
                writing efficient, clean code and tackling new challenges in game development.
              </p>
              <p className="text-base sm:text-lg text-purple-200 mb-6 sm:mb-8 leading-relaxed">
                With over 5 years of experience creating engaging and innovative gaming experiences, 
                I specialize in gameplay programming, system architecture, and creating polished user experiences 
                across multiple platforms and technologies.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6 sm:mb-8">
                <Button onClick={onViewProjects} className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto border-2 border-purple-500 hover:border-purple-400 shadow-lg shadow-purple-600/30">
                  View Projects
                </Button>
                <Button onClick={onContactClick} className="bg-slate-700 hover:bg-slate-600 text-white border-2 border-slate-500 hover:border-slate-400 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto shadow-lg">
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/895bb5b2-bf10-422c-8532-a6f330b6badc.png" 
                    alt="Albert Pujante - Game Developer" 
                    className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
