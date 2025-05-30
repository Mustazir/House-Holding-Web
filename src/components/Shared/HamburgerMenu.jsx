import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "100%", transition: { duration: 0.5 } },
  };

  const closeTextVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full">
      {/* Toggle Button */}
      <div
        className={`flex items-center fixed top-4 transition-all duration-1000 z-50 ${
          isOpen ? "right-8" : "right-0 lg:right-24 md:right-2"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 transition-all duration-300"
        >
          {/* Close Text */}
          <AnimatePresence>
            {isOpen && (
              <motion.span
                className="text-green-600 font-semibold text-base"
                variants={closeTextVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Close
              </motion.span>
            )}
          </AnimatePresence>

          {/* Hamburger Icon */}
          <div className="flex flex-col justify-center items-center w-10 h-10 gap-1 relative">
            <span
              className={`h-0.5 w-6 bg-green-400 transition-all duration-500 ${
                isOpen ? "rotate-45 translate-y-1 absolute" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-green-400 transition-all duration-500 ${
                isOpen ? "-rotate-45 -translate-y-1 absolute" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            className="fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-40 p-6"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit      >
            <ul className="space-y-4">
              <li><a href="#" className="text-lg font-semibold">Home</a></li>
              <li><a href="#" className="text-lg font-semibold">About</a></li>
              <li><a href="#" className="text-lg font-semibold">Services</a></li>
              <li><a href="#" className="text-lg font-semibold">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/30 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
