export default function Stats() {
  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Hosts</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">1000+</h3>
            <p>Vendors</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">10000+</h3>
            <p>Tourists</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5000+</h3>
            <p>Archives</p>
          </div>

        </div>
      </div>
    </section>
  );
}