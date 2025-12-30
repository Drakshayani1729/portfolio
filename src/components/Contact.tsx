import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-center text-gray-700 mb-8">
              I'm always open to discussing new projects, opportunities, or collaborations.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:drakshayani.chalageri16@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Mail className="text-gray-900" size={24} />
                <span className="text-gray-700">drakshayani.chalageri16@gmail.com</span>
              </a>

              <a
                href="tel:+918792659413"
                className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Phone className="text-gray-900" size={24} />
                <span className="text-gray-700">+91 8792659413</span>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <MapPin className="text-gray-900" size={24} />
                <span className="text-gray-700">Haveri, Karnataka</span>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/Drakshayani1729"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/drakshayani-chalageri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
