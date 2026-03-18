export default function Programs() {
  const programs = [
    { title: "Youth Mentorship", description: "Guiding youth towards success." },
    { title: "Community Cleanups", description: "Organizing community cleanups." },
    { title: "Skill Workshops", description: "Offering career and skills workshops." },
  ];

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Our Programs</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((p, idx) => (
          <div key={idx} className="bg-white shadow p-4 rounded">
            <h2 className="text-2xl font-semibold text-green-700">{p.title}</h2>
            <p className="mt-2 text-gray-700">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}