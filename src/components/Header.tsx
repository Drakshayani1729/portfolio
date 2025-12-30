import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Drakshayani Chalageri</h1>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#achievements" className="text-gray-600 hover:text-gray-900 transition-colors">Achievements</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Drakshayani1729" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/drakshayani-chalageri" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
