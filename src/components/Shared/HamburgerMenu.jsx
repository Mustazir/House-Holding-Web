import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeTextVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full ">
      {/* Toggle Button */}
      <div
        className={`group flex items-center gap-8 fixed top-8 transition-all duration-1000 z-50 ${
          isOpen ? "right-8" : "right-0 lg:right-34 md:right-2"
        }`}
      >
        {/* Menu Text */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              className="text-green-600 font-semibold text-2xl cursor-pointer"
              variants={closeTextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={toggleMenu}
            >
              MENU
            </motion.span>
          )}
        </AnimatePresence>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-4 transition-all duration-300 cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center w-10 h-10 gap-2.5 relative">
            {/* Top Line */}
            <span
              className={`h-1 w-9 bg-green-400 transition-all duration-500
          ${
            isOpen
              ? "rotate-45 translate-y-1 absolute"
              : "group-hover:-translate-y-0.5"
          }`}
            ></span>

            {/* Bottom Line */}
            <span
              className={`h-1 w-9 bg-green-400 transition-all duration-500
          ${
            isOpen
              ? "-rotate-45 -translate-y-1 absolute"
              : "group-hover:translate-y-0.5"
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
            className="fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg z-40 py-11 px-16"
            variants={{
              hidden: { x: "100%" },
              visible: {
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100, // lower stiffness for smoothness
                  damping: 20, // more damping for less bounce
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                },
              },
              exit: {
                x: "100%",
                transition: { duration: 0.5 },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button with animation */}
            <motion.span
              className="absolute top-10 right-24 text-black text-xl cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={toggleMenu}
            >
              Close
            </motion.span>

            {/* Animated menu items */}
            <motion.ul
              className="space-y-4 text-black mt-12"
              variants={{
                visible: {},
              }}
            >
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <a href="#" className="text-2xl font-semibold">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
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
