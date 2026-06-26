import AvailabilityCalendar from "../../components/homestays/AvailabilityCalendar";
const homestays = [
  {
    id: "1",
    title: "Mountain View Stay",
    location: "Tehri",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Beautiful homestay with mountain views.",
  },

  {
    id: "2",
    title: "Lake Side Cottage",
    location: "Nainital",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Beautiful cottage near the lake.",
  },
];

export default async function HomestayDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const homestay = homestays.find(
    (home) => home.id === id
  );

  if (!homestay) {
    return <h1>Homestay Not Found</h1>;
  }

  return (
    <div className="p-8">
      <img
        src={homestay.image}
        alt={homestay.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {homestay.title}
      </h1>

      <p className="text-gray-500">
        {homestay.location}
      </p>

      <p className="mt-4">
        {homestay.description}
      </p>

      <h2 className="font-bold mt-6">
        Amenities
      </h2>

      <ul className="list-disc ml-6">
        <li>WiFi</li>
        <li>Parking</li>
        <li>Kitchen</li>
      </ul>
      <AvailabilityCalendar />
    </div>
  );
}