import { ExternalLink, Download } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Efficient On-Device Detection of Cereal Crop Diseases',
      description: 'Built a lightweight MobileNetV2 model to classify 16 cereal crop diseases with 95.5% accuracy. Applied TensorFlow Lite quantization (3.8MB, <20ms inference) and deployed in Android app for offline use.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Kotlin'],
      link: 'https://drive.google.com/file/d/1Ay9MqPaPphA7k2jpsItKF8xMTxKP1SQM/view?usp=sharing',
      type: 'download'
    },
    {
      title: 'Contactless Integrated Track Monitoring System (ITMS)',
      description: 'Developed an indigenous, contactless system for real-time railway track inspection. Integrated LiDAR, stereo vision, ToF sensors, and AI-based defect detection using YOLOv8 on NVIDIA Jetson AGX Orin with real-time visualization dashboard.',
      tech: ['YOLOv8', 'Computer Vision', 'IoT', 'Real-time Systems'],
      timeline: '08/2025 - 12/2025'
    },
    {
      title: 'Senior Citizen Helpline',
      description: 'Developed a web-based platform to digitize elderly care service management. Integrated real-time monitoring features for vitals, medication schedules, and caregiver logs. Designed with accessibility and ease-of-use for daily health management.',
      tech: ['Web Development', 'Real-time Monitoring', 'Healthcare Tech'],
      link: 'https://cobot69.github.io/htmlElderne/MAIN_homepage.html',
      type: 'link'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {project.timeline && (
                  <p className="text-gray-500 text-sm mb-4">{project.timeline}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    {project.type === 'download' ? (
                      <>
                        <Download size={16} />
                        <span className="text-sm font-medium">Download APK</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">View Project</span>
                      </>
                    )}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
