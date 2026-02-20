import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import services from "../data/prices.json";

interface ModalProps {
  activeModal: boolean;
  setActiveModal: Dispatch<SetStateAction<boolean>>;
  setActiveServiceName: Dispatch<SetStateAction<string>>;
}

export const ServicesModal = ({
  activeModal,
  setActiveModal,
  setActiveServiceName,
}: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(activeModal);

  useEffect(() => {
    if (activeModal) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
    }
  }, [activeModal]);

  const handleClose = () => {
    // Спочатку запускаємо анімацію закриття
    const modal = document.getElementById("modal-inner");
    const modalOuter = document.getElementById("modal-outer");
    modal?.classList.add("modal-animation-out");
    modalOuter?.classList.add("modal-animation-out");

    // Чекаємо 500мс (час анімації) і закриваємо повністю
    setTimeout(() => {
      setActiveModal(false);
      setShouldRender(false);
      document.body.style.overflow = "auto";
    }, 500);
  };

  const getHours = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + "h " : ""}${minutes > 0 ? minutes + "m" : ""}`;
  };
  const [activeCategory, setActiveCategory] = useState<string[]>([""]);
  const toggleCategory = (category: string) => {
    const isActive = activeCategory.includes(category);
    if (isActive) {
      setActiveCategory(activeCategory.filter((cat) => cat !== category));
    } else {
      setActiveCategory([...activeCategory, category]);
    }
  };

  if (!activeModal && !shouldRender) return null;


  return (
    <section
      id="modal-outer"
      className="fixed inset-0 bg-white z-[1000] flex flex-col gap-2 transition-opacity duration-300
    items-center justify-center self-center justify-self-center rounded overflow-y-auto
    modal-container-blowup"
    >
      <div
        id="modal-inner"
        className="flex flex-col items-center gap-4 p-4 pt-8 w-[300px] modal-animation-in"
        style={{ maxHeight: "70vh" }}
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
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start bg-white rounded"
            >
              <div
                className="flex flex-row items-center gap-4 cursor-pointer w-full justify-between hover:text-[#BF925B] transition-colors duration-300"
                onClick={() => toggleCategory(item.category)}
              >
                <h3 className="text-xl font-bold capitalize">
                  {item.category}
                </h3>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 transition-transform duration-300"
                  style={{ transform: "rotate(90deg)" }}
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#BF925B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`flex flex-col items-center gap-4 transition-max-height duration-500
                overflow-hidden ${activeCategory.includes(item.category) ? "max-h-screen" : "max-h-0"}`}
              >
                {item.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-2 items-center w-[250px] bg-[#ebe8de] border border-[#bf925b] cursor-pointer
                    rounded p-2 capitalize mt-2 hover:bg-[#bf925b] hover:text-white transition-colors duration-300"
                    onClick={() => {
                      setActiveServiceName(service.name);
                      handleClose();
                      toggleCategory(item.category);
                    }}
                  >
                    <p className="row-span-2 font-medium text-left text-xl">
                      {service.name}
                    </p>
                    <p className="font-bold text-right">{service.price}$</p>
                    <p className="text-end">{getHours(service.duration)}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
