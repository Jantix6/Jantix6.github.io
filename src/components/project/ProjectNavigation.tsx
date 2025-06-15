
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectNavigationProps {
  currentProjectId: string;
}

const ProjectNavigation = ({ currentProjectId }: ProjectNavigationProps) => {
  return (
    <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="flex justify-between items-center">
            <Link to="/project/falling-friends" className={`flex items-center text-purple-300 hover:text-white transition-colors ${currentProjectId === 'falling-friends' ? 'opacity-50 pointer-events-none' : ''}`}>
              <ChevronLeft className="mr-2" size={20} />
              Falling Friends
            </Link>
            <Link to="/" className="text-purple-300 hover:text-white transition-colors">
              View All Projects
            </Link>
            <Link to="/project/the-magic-journey" className={`flex items-center text-purple-300 hover:text-white transition-colors ${currentProjectId === 'the-magic-journey' ? 'opacity-50 pointer-events-none' : ''}`}>
              The Magic Journey
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
