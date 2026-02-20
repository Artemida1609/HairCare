import { useEffect, useState } from "react";

interface BarbersProps {
  activeModal: boolean;
  setActiveModal: (value: boolean) => void;
  setActiveBarberName: (value: string) => void;
}

export const BarberNamesModal = ({activeModal, setActiveModal, setActiveBarberName}: BarbersProps & {setActiveBarberName: (value: string) => void}) => {
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

  if (!activeModal && !shouldRender) return null;
  return (
    <section id="modal-outer" className={`fixed inset-0 bg-white z-[1000] flex flex-col gap-2 transition-opacity 
    duration-300 items-center justify-center self-center justify-self-center rounded overflow-y-auto 
    modal-container-blowup`}>
      <div className="flex flex-col gap-4 p-8 w-[300px] modal-animation-in" id="modal-inner">
        <h2 className="text-2xl font-bold">Наші майстри</h2>
        <p className="" onClick={() => setActiveBarberName('gg')}>gg</p>
        <button onClick={handleClose} className="cursor-pointer">X</button>
      </div>
    </section>
  );
};
