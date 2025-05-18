const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold">ShantaCorp</h2>
          <p className="text-sm mt-2">
            Building excellence through innovation. Crafting modern living spaces in Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">Contact</h3>
          <p className="text-sm mt-2">Dhaka, Bangladesh</p>
          <p className="text-sm">Phone: +8801XXXXXXXXX</p>
          <p className="text-sm">Email: info@shantacorp.com</p>
        </div>
      </div>

      <div className="text-center py-4 bg-gray-900 text-sm">
        © {new Date().getFullYear()} ShantaCorp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
