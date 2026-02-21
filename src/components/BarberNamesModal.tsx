import { useEffect, useState } from "react";
import artists from "../data/artists.json";

interface BarbersProps {
  activeModal: boolean;
  setActiveModal: (value: boolean) => void;
  setActiveBarberName: (value: string) => void;
}

export const BarberNamesModal = ({
  activeModal,
  setActiveModal,
  setActiveBarberName,
}: BarbersProps & { setActiveBarberName: (value: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  if (activeModal) {
    document.body.style.overflow = "hidden";
    // Чекаємо поки браузер відрендерить елемент з opacity-0
    // тільки тоді запускаємо transition до opacity-100
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  } else {
    setIsVisible(false);
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 300); // збігається з duration-300
    return () => clearTimeout(timer);
  }
}, [activeModal]);

  const handleClose = () => {
    setActiveModal(false);
  };

  return (
    <section
      id="modal-outer"
      className={`fixed inset-0 bg-white z-[1000] flex flex-col gap-2 transition-all  
        duration-300 items-center justify-center self-center justify-self-center rounded 
        ${isVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-full"}
        ${!activeModal ? "pointer-events-none" : ""}
        `}
    >
      <div
        className={`
        flex flex-col gap-4 p-8 w-[300px]
        transition-all duration-500
        
        
      `}
        id="modal-inner"
      >
        <span className="absolute top-1 right-1">
          <button
            onClick={handleClose}
            className="flex w-8 h-8 items-center justify-center cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 
          10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 
          5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 
          19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 
          13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 
          4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              />
            </svg>
          </button>
        </span>
        <h2 className="text-2xl font-bold">Our Barbers</h2>
        <ul className="flex flex-col gap-2">
          {artists.map((artist) => (
            <li
              key={artist.name}
              className="cursor-pointer flex items-center gap-6 border border-[#e0e0e0] 
              hover:bg-[#BF925B] transition-all duration-200 p-4 rounded-md"
              onClick={() => {
                setActiveBarberName(artist.name);
                handleClose();
              }}
            >
              <img
                src={artist.img}
                alt={artist.name}
                width="64"
                height="64"
                loading="eager"
                className="w-16 h-16 object-cover rounded-full border-2 border-[#0a0909] flex-shrink-0"
              />
              <div className="flex flex-col justify-start items-start">
                <p>{artist.name}</p>
                <p>{artist.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
