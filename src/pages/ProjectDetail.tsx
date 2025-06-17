import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectNavigation from "@/components/project/ProjectNavigation";
import ProjectFooter from "@/components/project/ProjectFooter";

const ProjectDetail = () => {
  const { id } = useParams();

  // Scroll to top when component mounts or ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  const handleExternalLink = () => {
    if ('videoUrl' in project && project.videoUrl) {
      window.open(project.videoUrl, '_blank');
    } else if ('steamUrl' in project && project.steamUrl) {
      window.open(project.steamUrl, '_blank');
    } else if ('itchUrl' in project && project.itchUrl) {
      window.open(project.itchUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <ProjectHeader />
      <ProjectHero project={project} onExternalLink={handleExternalLink} />
      <ProjectTechnologies project={project} />
      <ProjectGallery project={project} />
      <ProjectFooter />
    </div>
  );
};

export default ProjectDetail;
