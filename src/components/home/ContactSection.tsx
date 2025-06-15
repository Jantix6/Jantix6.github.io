
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:albertpujantedp@gmail.com';
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to bring your game ideas to life? Let's collaborate and create the next big hit!
          </p>
        </div>
        <div className="max-w-md mx-auto text-center">
          <Button onClick={handleEmailClick} className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full mb-6">
            Get In Touch
          </Button>
          <div className="flex justify-center space-x-6">
            <a href="mailto:albertpujantedp@gmail.com" className="text-purple-300 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Jantix6" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/albertpujante" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
