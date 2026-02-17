import photo from "/images/gallery-pic1.jpg";
import artists from "../data/artists.json";
import { useEffect, useState } from "react";

export const HappyCustomerSection = () => {
  const [active, setActive] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

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
    <section className="relative flex flex-row justify-start items-center bg-[#ebe8de] p-24 gap-12 h-128 box-border" id="blog">
      <img
        src={photo}
        alt="Happy Customer"
        className="w-96 h-full object-cover"
      />
      <div className="flex flex-col justify-start items-start h-full p-8">
        <p className="text-[#BF925B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Testimony
        </p>
        <h1 className="text-[#0a0909] font-bold text-5xl uppercase tracking-[0.01em] mb-4">
          Happy Customer
        </h1>
        <p className="text-[#808080] text-m w-full mb-8">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
        <div className="relative flex flex-col">
          {artists.map((artist, index) => (
            <div
              key={index}
              className={`flex flex-row items-center gap-4 mt-4 ease-in-out duration-500 
                ${index === active ? "block" : "hidden"}`
              }
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
          <div className="flex mt-8">
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
