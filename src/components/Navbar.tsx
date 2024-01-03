import React from "react";
import { FaTimes } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import Dialogs from "./Dialog";

const Navbar = () => {
  const [scrolling, setScrolling] = React.useState(false);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust the threshold based on your design
      const threshold = 10;

      // Update the state based on the scroll position
      setScrolling(scrollPosition > threshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc = scrolling ? "../assets/newl.png" : "../assets/newl.png";

  return (
    <nav
      className={`fixed top-0 w-full z-20 h-24 ${
        scrolling
          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between h-24 sm:gap-96">
        <div className="flex items-center font-serif font-bold ml-4 sm:ml-12">
          <img className="pr-4 sm:pr-10 h-[50px] sm:h-[70px]" src={logoSrc} alt="logo" />
          <div className="flex flex-col items-center text-[20px] sm:text-[28px]">
            <span className="text-[#FFD700]">Youngrilex</span>
            <span className="text-white text-[16px] sm:text-[24px]">Artwork</span>
          </div>
        </div>
        <div
          className={`${
            menuOpen ? "hidden" : "hidden"
          } lg:block lg:items-center`}
        >
          <div className={`text-${scrolling ? "white" : ""}`}>
            <div className="flex lg:items-center lg:justify-around lg:gap-10 font-bold text-white">
              <a
                rel="noreferrer"
                href="#home"
                className="text-white hover:text-[#83daf7] py-2 hover:border-b-2"
              >
                Home
              </a>
              <a
                rel="noreferrer"
                href="#Services"
                className="text-white  hover:text-[#83daf7] py-2 hover:border-b-2 "
              >
                Services
              </a>
              <a
                rel="noreferrer"
                href="#Portfolio"
                className="text-white hover:text-[#83daf7] py-2 hover:border-b-2 "
              >
                Portfolio
              </a>
              <a
                rel="noreferrer"
                href="#About"
                className="text-white hover:text-[#83daf7] py-2 hover:border-b-2"
              >
                About
              </a>
              <a
                rel="noreferrer"
                href="#Contact"
                className="text-white hover:text-[#83daf7] py-2 hover:border-b-2"
              >
                Contact
              </a>
              <Dialogs />
            </div>
          </div>
        </div>
        <div className="">
          <button
            className="text-[#ffea72]  bg-transparent text-[24px] lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaTimes className="mt-32 ml-8" />
            ) : (
              <SlMenu />
            )}
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden lg:items-center lg:w-auto`}
          >
            <div className={`text-${scrolling ? "white" : ""}`}>
              <div className="flex flex-col items-center justify-around rounded-xl shadow-md bg-black/80 p-4 font-bold">
                <a
                  rel="noreferrer"
                  href="/Home"
                  className="text-white hover:text-[#83daf7]"
                >
                  Home
                </a>
                <a
                  rel="noreferrer"
                  href="/Home"
                  className="text-white hover:text-[#83daf7]"
                >
                Services
                </a>
                <a
                  rel="noreferrer"
                  href="#Portfolio"
                  className="text-white hover:text-[#83daf7]"
                >
                  Portfolio
                </a>
                <a
                  rel="noreferrer"
                  href="#About"
                  className="text-white hover:text-[#83daf7]"
                >
                  About
                </a>
                <a
                  rel="noreferrer"
                  href="#Contact"
                  className="text-white hover:text-[#83daf7]"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
