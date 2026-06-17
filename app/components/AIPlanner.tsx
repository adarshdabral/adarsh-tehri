export default function AIPlanner() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          AI Powered Trip Planner
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Plan your perfect journey with smart recommendations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 shadow-md rounded-xl">
            Smart Recommendations
          </div>

          <div className="p-6 shadow-md rounded-xl">
            Budget Planning
          </div>

          <div className="p-6 shadow-md rounded-xl">
            Weather Suggestions
          </div>

          <div className="p-6 shadow-md rounded-xl">
            Personalized Itinerary
          </div>

        </div>
      </div>
    </section>
  );
}