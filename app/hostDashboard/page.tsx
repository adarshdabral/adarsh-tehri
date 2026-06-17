import HostSidebar from "../components/host/HostSidebar";
export default function HostDashboard() {
  return (
  <div className="flex min-h-screen bg-slate-50">

      <HostSidebar />

      <div className="flex-1"></div>
<div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-3xl font-bold">
          Host Dashboard
        </h1>
        <p className="text-slate-200">
          Welcome back! Manage your homestay business.
        </p>
      </div>

      <div className="p-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-100 border-l-4 border-slate-700 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-gray-500">Total Earnings</h3>
            <p  className="text-3xl font-bold text-slate-800">₹45,000</p>
          </div>
<div className="bg-slate-100 border-l-4 border-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-gray-500">Active Listings</h3>
            <p className="text-3xl font-bold text-slate-800">3</p>
          </div>

      <div className="bg-slate-100 border-l-4 border-indigo-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-gray-500">Upcoming Bookings</h3>
            <p  className="text-3xl font-bold text-slate-800">12</p>
          </div>
<div className="bg-slate-100 border-l-4 border-slate-500 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-gray-500">Rating</h3>
            <p className="text-3xl font-bold text-slate-800">4.8⭐</p>
          </div>
          <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
  <h2 className="text-2xl font-bold mb-4 text-slate-800">
    Quick Actions
  </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
<button className="w-full h-36 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-center font-semibold px-6">
      + Create Listing
    </button>
<button className="w-full h-36 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-center font-semibold px-6">
      Manage Bookings
    </button>
<button className="w-full h-36 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-center font-semibold px-6">
      Update Calendar
    </button>
<button className="w-full h-36 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-center font-semibold px-6">
      View Earnings
    </button>

  </div>
</div>
<div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
  <h2 className="text-2xl font-bold mb-4 text-slate-800">
    Recent Bookings
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between border-b pb-3">
      <div>
        <h3 className="font-semibold">Rahul Sharma</h3>
        <p className="text-gray-500">20 Jun - 22 Jun</p>
      </div>
      <span className="font-medium text-green-600">
        Confirmed
      </span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <div>
        <h3 className="font-semibold">Priya Verma</h3>
        <p className="text-gray-500">25 Jun - 28 Jun</p>
      </div>
      <span className="font-medium text-yellow-600">
        Pending
      </span>
    </div>

    <div className="flex justify-between">
      <div>
        <h3 className="font-semibold">Aman Singh</h3>
        <p className="text-gray-500">30 Jun - 02 Jul</p>
      </div>
      <span className="font-medium text-green-600">
        Confirmed
      </span>
    </div>

  </div>
</div>
<div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
  <h2 className="text-2xl font-bold mb-4 text-slate-800">
    Notifications
  </h2>

  <div className="space-y-3">

    <div className="border-b pb-3">
      🔔 New booking received
    </div>

    <div className="border-b pb-3">
      🔔 Guest arriving tomorrow
    </div>

    <div className="border-b pb-3">
      🔔 New review received
    </div>

    <div>
      🔔 Listing approved successfully
    </div>

  </div>
</div>
<div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg border border-green-100">
  <h2 className="text-2xl font-bold mb-4 text-slate-800">
    Earnings Summary
  </h2>
<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">

    <div className="w-full h-48 rounded-xl border shadow-sm flex flex-col items-center justify-center text-center px-8">
      <h3 className="text-gray-500">
        This Month
      </h3>
      <p className="text-2xl font-bold">
        ₹45,000
      </p>
    </div>

   <div className="w-full h-48 rounded-xl border shadow-sm flex flex-col items-center justify-center text-center px-8">
      <h3 className="text-gray-500">
        Total Bookings
      </h3>
      <p className="text-2xl font-bold">
        12
      </p>
    </div>
<div className="w-full h-48 rounded-xl border shadow-sm flex flex-col items-center justify-center text-center px-8">
      <h3 className="text-gray-500">
        Average Rating
      </h3>
      <p className="text-2xl font-bold">
        4.8⭐
      </p>
    </div>

  </div>
</div>

        </div>

      </div>

    </div>
  );
}