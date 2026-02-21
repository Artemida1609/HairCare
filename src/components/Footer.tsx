// import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import footerIcons from "../data/footer-icons.json";

export const Footer = () => {
  const infoData = ["FAQs", "Privacy", "Terms Condition"];
  const linksData = ["Home", "About", "Services", "Work", "Blog", "Contact"];

  return (
    <footer className="relative flex flex-col sm:flex-row justify-center items-stretch bg-[#333333] p-8 sm:p-24" id="contact">
      <div className="flex flex-col w-full sm:w-1/4 justify-center items-center sm:justify-start sm:items-start mb-8 sm:mb-0">
        <h2 className="text-white font-bold text-2xl uppercase tracking-[0.01em] mb-4 sm:mb-12">
          Haircare
        </h2>
        <p className="text-[#808080] font-bold text-sm tracking-[0.2em] mb-4 sm:mb-8 text-center sm:text-left">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex flex-row gap-2">
          {footerIcons.slice(0, 3).map((icon, index) => (
            <button
              key={index}
              className="w-12 h-12 rounded-full bg-[#d1c8b4] 
            flex items-center justify-center
            hover:scale-110 hover:shadow-lg 
            origin-center will-change-transform
            transition-all duration-300 cursor-pointer
            active:scale-95 active:shadow-sm
            "
            >
              <img src={`${import.meta.env.BASE_URL}${icon.img}`} alt={icon.alt} className="w-8 h-8 block" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-1/4 sm:pl-12 text-center sm:text-left">
        <h2 className="text-white font-bold text-2xl uppercase tracking-[0.01em] mb-4 sm:mb-12">
          Information
        </h2>
        <ul>
          {infoData.map((item, index) => (
            <li
              key={index}
              className="text-[#808080] font-bold text-sm tracking-[0.2em] mb-4 cursor-pointer hover:text-[#BF925B]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full sm:w-1/4 sm:pl-12 text-center sm:text-left">
        <h2 className="text-white font-bold text-2xl uppercase tracking-[0.01em] mb-4 sm:mb-12">
          Links
        </h2>
        <ul>
          {linksData.map((item, index) => (
            <Link key={index} to={item==="Work" ? "gallery" : item.toLowerCase()} smooth={true} duration={500}>
            <li
              key={index}
              className="text-[#808080] font-bold text-sm tracking-[0.2em] mb-4 cursor-pointer hover:text-[#BF925B]"
            >
              {item}
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-1/4 text-center sm:text-left">
        <h2 className="text-white font-bold text-2xl uppercase tracking-[0.01em] mb-12">
          Have a Questions?
        </h2>
        <ul className="flex flex-col items-stretch w-full gap-4">
          {footerIcons.slice(3).map((icon, index) => (
            <li
              key={index}
              className="flex items-center cursor-pointer group gap-2"
            >
              <div
                className="w-12 h-12 rounded-full bg-[#d1c8b4] 
              flex items-center justify-center shrink-0
              group-hover:scale-110 transition-all duration-300 
              group-active:scale-95 group-active:shadow-sm"
              >
                <img src={`${import.meta.env.BASE_URL}${icon.img}`} alt={icon.alt} className="w-6 h-6" />
              </div>
              <p className="text-[#808080] font-bold text-sm tracking-[0.2em] group-hover:text-[#BF925B] flex-1 break-all">
                {icon.descr}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <p></p>
    </footer>
  );
};
