export default function HostSidebar() {
  return (
  <div className="w-64 min-h-screen bg-slate-800 text-white shadow-xl p-6">
      <h2 className="text-3xl font-bold mb-8">
        Host Panel
      </h2>
        <ul className="space-y-5 text-lg">
        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Dashboard
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          My Listings
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Bookings
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Calendar
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Earnings
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Reviews
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Analytics
        </li>

        <li className="cursor-pointer p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
          Settings
        </li>
      </ul>
    </div>
  );
}