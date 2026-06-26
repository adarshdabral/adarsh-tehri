import Link from "next/link";

export default function Step1() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Booking Step 1
      </h1>

      <p>Select Dates</p>

      <Link href="/homestays/booking/step2">
        <button className="mt-4 px-4 py-2 bg-black text-white rounded">
          Next
        </button>
      </Link>
    </div>
  );
}