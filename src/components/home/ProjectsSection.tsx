

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      id: "lethal-honor",
      title: "Lethal Honor - Order of the Apocalypse",
      description: "A challenging hack 'n' slash roguelite featuring demonic creatures, fast-paced melee combat, and powerful abilities. Join a secret organization fighting for humanity's survival.",
      image: "/lovable-uploads/ae1f792a-d1b3-4710-a5bd-911ebd381702.png",
      technologies: ["Unity", "C#"],
      category: "Action Roguelite",
      year: "2025",
      status: "In Development",
      steamUrl: "https://store.steampowered.com/app/1266060/Lethal_Honor__Order_of_the_Apocalypse/"
    },
    {
      id: "falling-friends",
      title: "Falling Friends",
      description: "A funny local multiplayer party-game for up to 4 players. Be the last one standing while avoiding falling into water and using abilities against other players.",
      image: "/lovable-uploads/3818d107-d2a8-4612-b336-188661771c2b.png",
      technologies: ["Unity", "C#"],
      category: "Party Game",
      year: "2019",
      status: "Released",
      itchUrl: "https://team-bug.itch.io/falling-friends"
    },
    {
      id: "the-magic-journey",
      title: "The Magic Journey",
      description: "A 2D platformer with puzzle elements featuring 3D low poly environments and sprite-based characters and enemies. Developed as programmer in a team of 4.",
      image: "/lovable-uploads/a8052c80-5478-4a0e-bfd7-20fa2d493a21.png",
      technologies: ["Unity", "C#"],
      category: "2D Platformer",
      year: "2018",
      status: "Released",
      videoUrl: "https://www.youtube.com/watch?v=IvRVQfojgWg&ab_channel=SergioRodr%C3%ADguezGonz%C3%A1lez"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-purple-200 text-base sm:text-lg max-w-4xl mx-auto">
            A selection of professional and personal works showcasing my skills and development approach
          </p>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group h-auto sm:h-[450px] flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white text-xs sm:text-sm">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader className="flex-grow p-4 sm:p-6">
                  <CardTitle className="text-white text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-purple-200 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
