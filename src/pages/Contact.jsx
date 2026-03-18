import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll contact you at ${email}`);
    setEmail(""); setMessage("");
  };

  return (
    <div className="min-h-screen p-6 bg-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-green-50 p-6 rounded shadow w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
        <input type="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 mb-3 border rounded" />
        <textarea placeholder="Your Message" value={message} onChange={e=>setMessage(e.target.value)} className="w-full p-2 mb-3 border rounded" />
        <button className="bg-green-600 text-white w-full py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}