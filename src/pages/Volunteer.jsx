import { useState } from "react";

export default function Volunteer() {
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering! We will contact you.");
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Become a Volunteer</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="How would you like to help?"
          className="w-full border p-3 rounded"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        />

        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}