import photo from "/images/gallery-pic1.jpg";
import artists from "../data/artists.json";
import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

export const HappyCustomerSection = () => {
  const [active, setActive] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const { screenSize } = useScreenSize();

  const nextItem = () => {
    setActive((curr) => (curr === artists.length - 1 ? 0 : curr + 1));
    setActiveButton((curr) => (curr === artists.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextItem();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section
      className="relative flex flex-row justify-start items-center bg-[#ebe8de] p-8 sm:p-12 gap-12 sm:h-128 box-border"
      id="blog"
    >
      {screenSize !== "sm" && screenSize !== "xs" && (
        <img
          src={photo}
          alt="Happy Customer"
          className="w-96 h-full object-cover"
        />
      )}
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start h-full sm:p-8">
        <p className="text-[#BF925B] text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-4">
          Testimony
        </p>
        <h1 className="text-[#0a0909] font-bold text-3xl sm:text-5xl uppercase tracking-[0.01em] mb-4 text-center sm:text-left">
          Happy Customer
        </h1>
        <p className="text-[#808080] text-m w-full mb-8 text-center sm:text-left">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
        <div className="relative flex flex-col">
          {artists.map((artist, index) => (
            <div
              key={index}
              className={`flex flex-row items-center gap-4 mt-4 ease-in-out duration-500 
                ${index === active ? "block" : "hidden"}`}
            >
              <img
                src={artist.img}
                alt={artist.name}
                className="block w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-[#0a0909] font-bold">{artist.name}</h3>
              <p className="text-[#808080]">{artist.position}</p>
            </div>
          ))}
          <div className="flex mt-8 justify-center sm:justify-start">
            {artists.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${index === activeButton ? "bg-[#BF925B]" : "bg-[#d1c8b4]"}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
