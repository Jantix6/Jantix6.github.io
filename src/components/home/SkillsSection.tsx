
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = [
    "Unity", "Unreal Engine", "C#", "C++",
    "Game Design", "Shader Programming",
    "Mobile Development"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional gaming experiences
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-slate-700/50 p-3 sm:p-4 rounded-lg text-center hover:bg-purple-600/20 transition-colors duration-300 hover:scale-105 transform flex items-center justify-center min-h-[70px] sm:min-h-[80px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-purple-200 font-medium text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
