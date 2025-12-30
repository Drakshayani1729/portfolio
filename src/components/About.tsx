export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900">B.E. Computer Science and Engineering (AI)</h4>
                  <p className="text-gray-600">KLE Technological University, Hubli</p>
                  <p className="text-gray-500 text-sm">2022 - Present</p>
                  <p className="text-gray-700 mt-2">CGPA: 8.25</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Higher Secondary</h4>
                  <p className="text-gray-600">MDRPU Tharlagatta, Dharwad</p>
                  <p className="text-gray-500 text-sm">2019 - 2021</p>
                  <p className="text-gray-700 mt-2">Percentage: 91.5%</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interpersonal Skills</h3>
            <div className="bg-white p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Problem-solving</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Time management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Communication</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-700">Adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
