import { Award, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: '1st Prize - ROBORANA 1.0',
      description: 'National Robotics Competition at SKSVMA College of Engineering, Laxmeshwar',
      icon: Trophy
    },
    {
      title: 'Smart India Hackathon 2025',
      description: 'Participated in the Grand Finale of Smart India Hackathon (SIH) 2025',
      icon: Award
    },
    {
      title: 'E-yantra Innovation Challenge',
      description: 'Participated in E-yantra Innovation Challenge (eYIC 2024-25)',
      icon: Award
    },
    {
      title: 'ROBORAGE 2025',
      description: 'Participated in ROBORAGE 2025 at BIET, Davanagere',
      icon: Award
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
