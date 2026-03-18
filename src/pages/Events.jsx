import { useState } from "react";

export default function Events() {
  const [events] = useState([
    { id: 1, title: "Tree Planting", date: "2026-04-10" },
    { id: 2, title: "Youth Workshop", date: "2026-04-20" },
  ]);

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Upcoming Events</h1>
      {events.length === 0 && <p>No events yet.</p>}
      <ul className="space-y-2">
        {events.map(e => (
          <li key={e.id} className="bg-green-50 p-3 rounded shadow">{e.title} - {e.date}</li>
        ))}
      </ul>
    </div>
  );
}