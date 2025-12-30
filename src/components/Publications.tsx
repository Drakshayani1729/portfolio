import { BookOpen } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'Efficient On-Device Detection of Cereal Crop Diseases using MobileNetV2',
      authors: 'Havalad, R., Belakoppa, R., Chalageri, D., Vachana, T. K., Gopal, A., & Kulkarni, U.',
      conference: 'AITA 2025: International Conference on Artificial Intelligence – Theory and Applications',
      venue: 'IBS Bangalore, IFHE University',
      year: '2025'
    },
    {
      title: 'A Comprehensive Survey on Metric-Based Few-Shot Learning Techniques',
      conference: 'IC2IS 2024',
      publisher: 'Springer',
      year: '2024'
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Publications</h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <BookOpen className="text-gray-900" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  {pub.authors && (
                    <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                  )}
                  <p className="text-gray-700 text-sm">
                    {pub.conference}
                    {pub.venue && `, ${pub.venue}`}
                    {pub.publisher && ` (${pub.publisher})`}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{pub.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
