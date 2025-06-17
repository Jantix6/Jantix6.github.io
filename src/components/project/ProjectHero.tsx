
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube } from "lucide-react";
import { Project } from "@/data/projectsData";

interface ProjectHeroProps {
  project: Project;
  onExternalLink: () => void;
}

const ProjectHero = ({ project, onExternalLink }: ProjectHeroProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-purple-600 text-white">{project.category}</Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-300">{project.year}</Badge>
                <Badge variant="outline" className="border-green-400 text-green-300">{project.status}</Badge>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
              <h2 className="text-2xl text-purple-300 mb-6">{project.subtitle}</h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={onExternalLink}
                  className="bg-purple-600 hover:bg-purple-700 text-white border-2 border-purple-500 hover:border-purple-400 shadow-lg shadow-purple-600/30"
                >
                  {'videoUrl' in project ? (
                    <>
                      <Youtube className="mr-2" size={16} />
                      Watch on YouTube
                    </>
                  ) : 'steamUrl' in project ? (
                    <>
                      <span className="mr-2 text-sm font-bold">STEAM</span>
                      View on Steam
                    </>
                  ) : (
                    <>
                      <span className="mr-2 text-sm font-bold">ITCH</span>
                      Play on Itch.io
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-lg shadow-2xl border border-purple-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
