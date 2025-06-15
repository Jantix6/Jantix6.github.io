
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectHeader = () => {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="inline-flex items-center text-purple-300 hover:text-white transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default ProjectHeader;
