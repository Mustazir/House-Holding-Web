import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full">
      {/* Hamburger + Close with transition */}
      <div
        className={`flex items-center fixed top-4 transition-all duration-300 z-50 ${
          isOpen ? "right-8" : "right-4"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 transition-all duration-300"
        >
          {/* Icon Lines */}
          <div className="flex flex-col justify-center items-center w-10 h-10 gap-1 relative">
            <span
              className={`h-0.5 w-6 bg-green-400 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1 absolute" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-green-400 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1 absolute" : ""
              }`}
            ></span>
          </div>

          {/* Close Text Slide-in */}
          <span
            className={`text-green-600 font-semibold text-base transform-transition-all duration-300  ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            Close
          </span>
        </button>
      </div>

      {/* Slide-in Navigation (right) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-4">
          <li><a href="#" className="text-lg font-semibold">Home</a></li>
          <li><a href="#" className="text-lg font-semibold">About</a></li>
          <li><a href="#" className="text-lg font-semibold">Services</a></li>
          <li><a href="#" className="text-lg font-semibold">Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/30 z-30 transition-opacity duration-300"
        />
      )}
    </div>
  );
}
