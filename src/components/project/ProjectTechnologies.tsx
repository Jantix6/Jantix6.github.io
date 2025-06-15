
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projectsData";

interface ProjectTechnologiesProps {
  project: Project;
}

const ProjectTechnologies = ({ project }: ProjectTechnologiesProps) => {
  return (
    <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-4 py-2 text-lg">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTechnologies;
