
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:albertpujantedp@gmail.com';
  };

  const handleDownloadCV = async () => {
    try {
      // Replace 'your-file-name.pdf' with the actual filename in lovable-uploads
      const fileName = 'Resume-Albert-Pujante.pdf';
      const fileUrl = '/lovable-uploads/${fileName}';
      
      // Check if we're on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Fetch the file
      const response = await fetch(fileUrl);
      
      if (!response.ok) {
        throw new Error('Failed to download file: ${response.statusText}');
      }
      
      // Convert response to blob
      const blob = await response.blob();
      
      // For mobile devices, we might want to open in a new tab instead of forcing download
      if (isMobile) {
        const downloadUrl = window.URL.createObjectURL(blob);
        
        // Try to open in new tab first (more reliable on mobile)
        const newWindow = window.open(downloadUrl, '_blank');
        
        if (!newWindow) {
          // Fallback to download if popup blocked
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = fileName;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        
        // Clean up after a delay to ensure the file is processed
        setTimeout(() => {
          window.URL.revokeObjectURL(downloadUrl);
        }, 1000);
        
      } else {
        // Desktop behavior - direct download
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      }
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Failed to download CV. Please try again. ${error}');
    }
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
            <Button onClick={handleDownloadCV} className="bg-purple-600 hover:bg-purple-700 text-white border-2 border-purple-500 hover:border-purple-400 px-3 py-1 text-sm">
              <Download size={14} className="mr-2" />
              Resume
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
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center space-x-4 pt-4">
                <a href="https://github.com/Jantix6" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/albertpujante" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <button onClick={handleEmailClick} className="text-purple-300 hover:text-white transition-colors">
                  <Mail size={20} />
                </button>
              </div>
              <Button onClick={handleDownloadCV} className="bg-purple-600 hover:bg-purple-700 text-white border-2 border-purple-500 hover:border-purple-400 px-3 py-1 text-sm">
                <Download size={14} className="mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
