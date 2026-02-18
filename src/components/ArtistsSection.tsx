import artists from "../data/artists.json";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const ArtistsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section className="flex flex-col justify-start items-center bg-[#f5f2ea] pt-4 sm:pt-12 overflow-hidden">
      <p className="text-[#BF925B] text-xs font-bold uppercase tracking-[0.2em]">
        Artistic Director
      </p>
      <h1 className="text-[#0a0909] font-bold text-3xl sm:text-5xl uppercase tracking-[0.01em]">
        Makeup Artist
      </h1>
      <p className="text-[#808080] text-m text-center w-full">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <motion.div
        className="flex flex-col sm:flex-row justify-start items-center w-full p-12 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        {artists.map((person, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col transition-all duration-50 cursor-pointer group"
            variants={itemVariants}
            whileHover={{ 
              y: -16,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
            }}
          >
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}${person.img}`}
                alt={person.name}
                className="w-96 h-96 object-cover backdrop-blur-xs backdrop-grayscale transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[#BF925B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="relative bg-[#333333] h-24 flex flex-col justify-center items-center transition-transform duration-300">
              <h2 className="text-xl font-bold uppercase text-white tracking-[0.0001em] text-center">
                {person.name}
              </h2>
              <p className="text-sm font-bold uppercase text-[#BF925B] tracking-[0.002em]">
                {person.position}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
