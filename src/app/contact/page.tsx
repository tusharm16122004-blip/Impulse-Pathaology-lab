export default function ContactPage() {
  return (
    <section className="py-16 min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-600">
          Have questions? Reach out to us, and we’ll be happy to help.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-2"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg p-2"
            rows={4}
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
