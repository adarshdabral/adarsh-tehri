"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function AvailabilityCalendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className="mt-6 border rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">
        Availability Calendar
      </h2>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />

      {selected && (
        <p className="mt-4">
          Selected Date:
          {selected.toDateString()}
        </p>
      )}
    </div>
  );
}