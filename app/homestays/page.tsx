import SearchFilters from "../components/homestays/SearchFilters";
import HomestayCard from "../components/homestays/HomestayCard";

const homestays = [
  {
    id: 1,
    title: "Mountain View Stay",
    location: "Tehri",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 2,
    title: "Lake Side Cottage",
    location: "Nainital",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 3,
    title: "Hillside Retreat",
    location: "Mussoorie",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
  },
];

export default function HomestaysPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div
        className="relative h-[550px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
            Stay Close To Nature,
            Feel At Home
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-xl">
            Discover premium homestays across Uttarakhand
            with breathtaking mountain views and unforgettable experiences.
          </p>

          <div className="mt-10">
            <SearchFilters />
          </div>
        </div>
      </div>

      {/* Browse Section */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Browse Homestays
            </h2>

            <p className="text-gray-500 mt-2">
              Find your perfect getaway.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {homestays.map((home) => (
            <HomestayCard
              key={home.id}
              id={home.id}
              title={home.title}
              location={home.location}
              price={home.price}
              image={home.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}