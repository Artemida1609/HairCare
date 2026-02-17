import { Link } from "react-scroll";
import { useSideBar } from "../contexts/SideBarContext";
import { Header } from "./Header";
import { useEffect, useState } from "react";

export const SideBar = () => {
  const { showSideBar, setShowSideBar } = useSideBar();
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const navItems = ["Home", "Services", "Gallery", "About", "Blog", "Contact"];

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <aside
      className={`w-screen h-screen bg-[#BF925B] text-white z-100 fixed
                  top-0 left-0 transform transition-transform duration-300 
                  ${showSideBar ? "translate-x-0" : "-translate-x-full"}
                  ${screenSize && screenSize >= 768 ? "hidden" : ""}`}
    >
      <Header />
      <ul className="flex flex-col items-center justify-center w-screen mt-18 gap-2">
        {navItems.map((item, index) => (
          <Link
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            key={index}
            className="p-2 hover:bg-[#a67c4f] active:bg-[#a67c4f] cursor-pointer w-full text-center"
            onClick={() => setShowSideBar(false)}
          >
            {item}
          </Link>
        ))}
      </ul>
    </aside>
  );
};
