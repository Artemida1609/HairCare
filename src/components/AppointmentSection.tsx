// import CustomDropdown from "../features/CustomDropdown";
// import { Button } from "./Button";
// import services from '../data/services.json';
import { useState } from "react";
import { BookForm } from "./BookForm";
import { ServicesModal } from "./ServicesModal";
import { BarberNamesModal } from "./BarberNamesModal";

export const AppointmentSection = () => {
  const [activeServicesModal, setActiveServicesModal] = useState(false);
  const [activeBarbersModal, setActiveBarbersModal] = useState(false);
  const [activeServiceName, setActiveServiceName] = useState<string>("Service name");
  const [activeBarberName, setActiveBarberName] = useState<string>("Barber name");


  return (
    <section className="flex flex-col bg-[#EBE8DE] justify-start items-center p-4 sm:p-16" id="book-form">
      <ServicesModal activeModal={activeServicesModal} setActiveModal={setActiveServicesModal} setActiveServiceName={setActiveServiceName}/>
      <BarberNamesModal activeModal={activeBarbersModal} setActiveModal={setActiveBarbersModal} setActiveBarberName={setActiveBarberName}/>

      <p className="text-[#BF925B] font-bold tracking-[0.1em] uppercase text-sm mb-2">
        Booking
      </p>
      <h1 className="text-[#0a0909] text-3xl sm:text-5xl font-bold tracking-[0.01em] uppercase mb-4 text-center">
        Make an Appointment
      </h1>
      <p className="text-[#808080] text-m text-center w-full mb-8">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      {/* <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
        <input
          type="text"
          placeholder="Name"
          className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
        />
        <input
          type="text"
          placeholder="Email"
          className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
        />
        <input
          type="date"
          placeholder="Date"
          className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
        />
        <input
          type="time"
          placeholder="Time"
          className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
        />
        <CustomDropdown id="1" data={services} />
        <input
          type="text"
          placeholder="Phone"
          className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
        />
        <textarea
          placeholder="Message"
          className="h-36 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid sm:col-span-2"
        />
      </form>
      <Button text="Make an appointment" /> */}
      <BookForm setActiveServiceModal={setActiveServicesModal} setActiveBarbersModal={setActiveBarbersModal} activeServiceName={activeServiceName} activeBarberName={activeBarberName} />
    </section>
  );
};
