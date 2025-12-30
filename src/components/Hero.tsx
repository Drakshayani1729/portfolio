export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-gray-100 flex-shrink-0">
            <img
              src="/image.jpeg"
              alt="Drakshayani Chalageri"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Drakshayani Chalageri
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Computer Science & Engineering (AI) Student
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Passionate about Machine Learning, Deep Learning, and Web Development.
              Currently pursuing B.E. at KLE Technological University with expertise in
              AI-driven solutions and innovative software development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
