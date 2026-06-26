import Link from "next/link";

export default function Step2() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Booking Step 2
      </h1>

      <p>Guest Details</p>

      <input
        placeholder="Name"
        className="border p-2 block mb-3"
      />

      <input
        placeholder="Phone"
        className="border p-2 block"
      />

      <Link href="/homestays/booking/step3">
        <button className="mt-4 px-4 py-2 bg-black text-white rounded">
          Next
        </button>
      </Link>
    </div>
  );
}