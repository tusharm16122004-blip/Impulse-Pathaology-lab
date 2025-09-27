export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/lab-hero.jpg')" }}
      >
        {/* Overlay for readability */}
        <div className="bg-black/50 p-12 rounded-xl text-center max-w-2xl text-white">
          <h1 className="text-5xl font-bold">Impulse Pathology Lab</h1>
          <p className="mt-4 text-lg">
            Accurate Diagnostics. Trusted Results. Your health, our priority.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">
              Book a Test
            </button>
            <button className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <p>Content continues here...</p>
      </section>
    </div>
  );
}
