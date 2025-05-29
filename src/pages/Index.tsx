

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    "Unity", "Unreal Engine", "C#", "C++",
    "Game Design", "Shader Programming",
    "Mobile Development"
  ];

  const projects = [
    {
      id: "space-odyssey",
      title: "Space Odyssey",
      description: "An immersive 3D space exploration game built with Unity featuring realistic physics and stunning visuals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#"],
      category: "3D Action"
    },
    {
      id: "pixel-adventures",
      title: "Pixel Adventures",
      description: "A charming 2D platformer with retro aesthetics and modern gameplay mechanics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#"],
      category: "2D Platformer"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@gamedev.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Albert Pujante</h1>
              <p className="text-purple-300 text-sm">Game Developer</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Jantix6" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/albertpujante" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <button onClick={handleEmailClick} className="text-purple-300 hover:text-white transition-colors">
                <Mail size={24} />
              </button>
              <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-3 py-1 text-sm">
                <Download size={14} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero + About Merged Section */}
      <section id="about" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center text-center">
              {/* Left side - Content */}
              <div>
                <p className="text-lg lg:text-xl text-purple-200 mb-6 leading-relaxed">
                  Game programmer specializing in systems and gameplay programming, focused on 
                  writing efficient, clean code and tackling new challenges in game development.
                </p>
                <p className="text-lg text-purple-200 mb-8 leading-relaxed">
                  With over 5 years of experience creating engaging and innovative gaming experiences, 
                  I specialize in gameplay programming, system architecture, and creating polished user experiences 
                  across multiple platforms and technologies.
                </p>

                {/* Buttons */}
                <div className="flex justify-center mb-8">
                  <Button onClick={scrollToProjects} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                    View Projects
                  </Button>
                </div>
              </div>

              {/* Right side - Profile Image */}
              <div className="flex justify-center">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/895bb5b2-bf10-422c-8532-a6f330b6badc.png" 
                      alt="Albert Pujante" 
                      className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-300" size={32} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Explore some of my latest game development projects showcasing different genres
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`}>
                <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group h-[450px] flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-600 text-white">{project.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-purple-200">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-400 text-purple-300">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional gaming experiences
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-purple-600/20 transition-colors duration-300 hover:scale-105 transform flex items-center justify-center min-h-[80px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-purple-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Ready to bring your game ideas to life? Let's collaborate and create the next big hit!
            </p>
          </div>
          <div className="max-w-md mx-auto text-center">
            <Button onClick={handleEmailClick} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg w-full mb-6">
              Get In Touch
            </Button>
            <div className="flex justify-center space-x-6">
              <a href="mailto:contact@gamedev.com" className="text-purple-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
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

export default Index;

