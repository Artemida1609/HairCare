import { motion } from "framer-motion";
import haircut from "/images/haircut-serv.png";
import beard from "/images/beard-serv.png";
import makeup from "/images/makeup-serv.png";
import body_treatment from "/images/body-treat-serv.png";

export const ServicesSection = () => {

  const sideCardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, duration: 1.2, bounce: 0.6 },
    },
  };

  return (
    <section className="flex flex-col justify-center items-center p-4 sm:p-16 bg-[#f5f2ea]" id="services">
      <p className="text-[#BF925B] font-bold text-sm tracking-[0.2em] uppercase mb-2">Services</p>
      <h1 className="text-[#0a0909] font-bold text-3xl sm:text-5xl mb-4 uppercase tracking-[0.01em] text-center">Services Menu</h1>
      <p className="text-[#808080] text-m mb-8 text-center w-full">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="flex flex-col sm:flex-row sm:gap-8 justify-center items-start items-stretch w-full">
        {[
          { img: haircut, title: "Haircut & Styling" },
          { img: beard, title: "Beard" },
          { img: makeup, title: "Makeup" },
          { img: body_treatment, title: "Body Treatment" },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center sm:w-64 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
            variants={sideCardVariants}
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="max-w-full max-h-full object-contain mb-4"
              />
            </div>
            <h1 className="text-xl font-bold uppercase tracking-[0.01em] mb-2">
              {service.title}
            </h1>
            <p className="text-[#808080] text-m max-w-md mb-6">
              A small river named Duden flows by their place and supplies.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
