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
        className={`group cursor-pointer flex items-center gap-8 fixed top-8 transition-all  duration-1000 z-50  ${
          isOpen ? "right-8" : "right-0 lg:right-34 md:right-2"
        }`}
      >
        {/* Menu Text */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              className="text-primary-color-two font-semibold text-2xl  group-hover:text-secondary-color "
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
              className={`h-1 w-9 bg-secondary-color transition-all duration-500
          ${
            isOpen
              ? "rotate-45 translate-y-1 absolute"
              : "group-hover:-translate-y-0.5"
          }`}
            ></span>

            {/* Bottom Line */}
            <span
              className={`h-1 w-9 bg-secondary-color transition-all duration-500
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
              <div className="flex items-center gap-2 border-b">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <input className="text-amber-900  text-xl p-4 border-none" type="search" name="Search Project" placeholder="Search Project" id="" />
            </div>
              
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
