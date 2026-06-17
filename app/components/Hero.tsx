export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-green-50 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            Sustainable Tourism & Rural Development
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-gray-900">
            Discover the Heart of
            <span className="text-blue-700"> Tehri</span>
          </h1>

          <p className="text-lg text-gray-600 mt-6">
            Explore authentic homestays, local products, cultural events,
            adventure activities and AI-powered travel planning — all in one
            platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
              Explore Tehri
            </button>

            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition">
              AI Trip Planner
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-700">500+</h3>
              <p className="text-gray-600">Homestays</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">100+</h3>
              <p className="text-gray-600">Events</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-600">1000+</h3>
              <p className="text-gray-600">Travelers</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Tehri Tourism"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}