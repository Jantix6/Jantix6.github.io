
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:albertpujantedp@gmail.com';
  };

  const handleDownloadCV = () => {
    alert('Please add your CV file to the project and update this function to download it.');
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Albert Pujante</h1>
            <p className="text-purple-300 text-sm sm:text-lg lg:text-xl">Game Developer</p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/Jantix6" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/albertpujante" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <button onClick={handleEmailClick} className="text-purple-300 hover:text-white transition-colors">
              <Mail size={20} />
            </button>
            <Button onClick={handleDownloadCV} variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-3 py-1 text-sm">
              <Download size={14} className="mr-2" />
              CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-purple-300 hover:text-white transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/Jantix6" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/albertpujante" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <button onClick={handleEmailClick} className="text-purple-300 hover:text-white transition-colors">
                  <Mail size={20} />
                </button>
                <Button onClick={handleDownloadCV} variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-3 py-1 text-sm">
                  <Download size={14} className="mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
