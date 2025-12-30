export default function Skills() {
  const skills = {
    languages: ['C', 'C++', 'Java', 'Python', 'SQL'],
    technical: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'TensorFlow',
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Management System',
      'Computer Networks',
      'Operating System',
      'Web Development'
    ]
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
