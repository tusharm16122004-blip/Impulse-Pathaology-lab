export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold">Impulse Lab</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/book-test" className="hover:underline">Book Test</a>
        <a href="/reports" className="hover:underline">Reports</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
