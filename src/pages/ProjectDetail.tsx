import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Link as LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Scroll to top when component mounts or ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projects = {
    "space-odyssey": {
      title: "Space Odyssey",
      subtitle: "Immersive 3D Space Exploration",
      description: "Space Odyssey is an ambitious 3D space exploration game that pushes the boundaries of what's possible in Unity. Players embark on an epic journey through procedurally generated galaxies, discovering new planets, alien civilizations, and cosmic mysteries.",
      longDescription: `
        This project represents two years of dedicated development, featuring cutting-edge graphics technology and innovative gameplay mechanics. The game combines realistic space physics with engaging exploration elements, creating an experience that's both scientifically grounded and fantastically entertaining.

        Key technical achievements include a custom procedural generation system for planets and star systems, advanced shader work for realistic space environments, and a sophisticated AI system for alien encounters. The game also features a complex crafting system and dynamic narrative elements that adapt based on player choices.
      `,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      technologies: ["Unity 3D", "C#", "HLSL Shaders", "Procedural Generation", "Physics Simulation", "AI Programming"],
      category: "3D Action/Exploration",
      year: "2024",
      status: "In Development",
      gallery: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
      ],
      features: [
        "Procedurally generated galaxy with billions of unique planets",
        "Realistic physics-based space flight mechanics",
        "Dynamic weather and atmospheric systems",
        "Advanced AI for alien civilizations",
        "Comprehensive crafting and base building",
        "Multiplayer exploration capabilities"
      ],
      challenges: [
        "Optimizing performance for large-scale procedural generation",
        "Creating believable alien AI behaviors",
        "Balancing realism with fun gameplay mechanics",
        "Implementing seamless planetary transitions"
      ]
    },
    "pixel-adventures": {
      title: "Pixel Adventures",
      subtitle: "Retro-Style 2D Platformer",
      description: "Pixel Adventures brings back the golden age of platformers with modern design sensibilities. This charming 2D game features hand-crafted pixel art, tight controls, and cleverly designed levels that challenge players while remaining accessible.",
      longDescription: `
        Inspired by classic platformers but built with modern tools and techniques, Pixel Adventures showcases the timeless appeal of well-designed 2D gameplay. The project emphasizes precise controls, creative level design, and a progression system that keeps players engaged from start to finish.

        The development focused heavily on feel and polish, with extensive playtesting to ensure every jump feels satisfying and every challenge feels fair. The game features a custom animation system, dynamic lighting effects, and a memorable soundtrack that perfectly complements the retro aesthetic.
      `,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
      technologies: ["Unity 2D", "C#", "Pixel Art", "Animation", "Level Design", "Audio Integration"],
      category: "2D Platformer",
      year: "2023",
      status: "Released",
      gallery: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
      ],
      features: [
        "60+ hand-crafted levels across 6 unique worlds",
        "Smooth, responsive character controls",
        "Collectible system with secret areas",
        "Boss battles with unique mechanics",
        "Achievement system and speedrun modes",
        "Original chiptune soundtrack"
      ],
      challenges: [
        "Achieving pixel-perfect collision detection",
        "Balancing difficulty progression",
        "Creating memorable boss encounters",
        "Optimizing for mobile platforms"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

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
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-purple-300 hover:text-white transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
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
                  <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white">
                    <LinkIcon className="mr-2" size={16} />
                    Live Demo
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

      {/* Technologies */}
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

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Project Gallery</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <div className="flex justify-between items-center">
              <Link to="/project/pixel-adventures" className={`flex items-center text-purple-300 hover:text-white transition-colors ${id === 'pixel-adventures' ? 'opacity-50 pointer-events-none' : ''}`}>
                <ChevronLeft className="mr-2" size={20} />
                Pixel Adventures
              </Link>
              <Link to="/" className="text-purple-300 hover:text-white transition-colors">
                View All Projects
              </Link>
              <Link to="/project/space-odyssey" className={`flex items-center text-purple-300 hover:text-white transition-colors ${id === 'space-odyssey' ? 'opacity-50 pointer-events-none' : ''}`}>
                Space Odyssey
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-300">© 2025 Albert Pujante. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
