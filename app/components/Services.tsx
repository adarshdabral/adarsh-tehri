import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
export default function Services() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Our Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card>
  <h3 className="text-xl font-semibold mb-3">Homestays</h3>
  <p>
    Book verified local homestays and experience authentic hospitality.
  </p>
</Card>

          <Card>
  <h3 className="text-xl font-semibold mb-3">Marketplace</h3>
  <p>
    Buy handmade crafts and local products directly from artisans.
  </p>
</Card>

          <Card>
  <h3 className="text-xl font-semibold mb-3">Events</h3>
  <p>
    Discover cultural festivals and community events.
  </p>
</Card>

         <Card>
  <h3 className="text-xl font-semibold mb-3">Activities</h3>
  <p>
    Explore trekking, camping and adventure experiences.
  </p>
</Card>

        </div>
      </div>
    </section>
  );
}