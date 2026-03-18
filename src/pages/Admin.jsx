export default function Admin() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">
        Founder Dashboard – Ryan
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded">
          <h3 className="font-bold">Total Volunteers</h3>
          <p className="text-2xl mt-2">24</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h3 className="font-bold">Upcoming Events</h3>
          <p className="text-2xl mt-2">3</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h3 className="font-bold">Community Reach</h3>
          <p className="text-2xl mt-2">1,200+</p>
        </div>
      </div>
    </div>
  );
}