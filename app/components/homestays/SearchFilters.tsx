export default function SearchFilters() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-6xl">

      <div className="grid md:grid-cols-5 gap-4 items-center">

        <div>
          <label className="text-sm text-gray-500">
            Location
          </label>

          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full mt-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Check In
          </label>

          <input
            type="date"
            className="w-full mt-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Check Out
          </label>

          <input
            type="date"
            className="w-full mt-2 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Guests
          </label>

          <input
            type="number"
            placeholder="2 Guests"
            className="w-full mt-2 outline-none"
          />
        </div>

        <button
          className="
          bg-gray-800
          hover:bg-black
          text-white
          rounded-xl
          px-6
          py-4
          font-semibold
          transition
          "
        >
          Search Stays
        </button>

      </div>
    </div>
  );
}