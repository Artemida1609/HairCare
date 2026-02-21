import for_men from "/images/for-men.jpg";
import for_women from "/images/for-women.jpg";
import { Button } from "./Button";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export const WelcomeSection = () => {
  const sideCardVariants: Variants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween" as const, duration: 0.8 },
    },
  };

  const centerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8 },
    },
  };

  return (
    <section className="flex flex-col sm:flex-row justify-center w-full items-stretch sm:items-center gap-4 bg-[#f5f2ea] overflow-hidden" id="about">
      <motion.div
        className="relative w-full sm:w-1/4 h-[300px] sm:h-130 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${for_men}')`,
        }}
        initial="hiddenLeft"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        variants={sideCardVariants}
      >
        <h1 className="text-white text-2xl font-bold">For Men</h1>
        <p className="text-[#BF925B] cursor-pointer transition">
          See pricing{" "}
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-2 inline-block stroke-[#BF925B]"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
          >
            <path d="M3,12H21m-3,3,3-3L18,9" />
          </svg>
        </p>
      </motion.div>
      <motion.div
        className="w-full sm:w-2/4 flex-1 h-full sm:h-130 flex flex-col justify-stretch items-center text-center sm:pt-2 sm:pb-2 md:pt-4 md:pb-4 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        variants={centerVariants}
      >
        <div className="w-20 h-20 rounded-full border-4 border-[#0a0909] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="w-12 h-12 stroke-[#0a0909]"
          >
            <g transform="translate(51,3)">
              <path d="M0 0 C-0.61791312 3.23490384 -1.73260183 5.34204705 -3.65234375 8.00390625 C-4.44608398 9.11475586 -4.44608398 9.11475586 -5.25585938 10.24804688 C-5.81080078 11.01181641 -6.36574219 11.77558594 -6.9375 12.5625 C-8.0301254 14.08450802 -9.12258018 15.60663855 -10.21484375 17.12890625 C-10.70073975 17.79994385 -11.18663574 18.47098145 -11.68725586 19.16235352 C-12.82330745 20.75265671 -13.9158942 22.37384131 -15 24 C-7.66194706 22.28258335 -0.5752453 20.26662378 6.50390625 17.671875 C9 17 9 17 12 18 C9.37038781 24.6935583 2.5739225 27.56016763 -3.53515625 30.54296875 C-11.6779674 33.96717231 -20.25178665 35.86866895 -29 37 C-29 38.32 -29 39.64 -29 41 C-28.154375 40.484375 -27.30875 39.96875 -26.4375 39.4375 C-22.41263214 37.75437344 -20.19785702 38.07647145 -16 39 C-15.1875 41.625 -15.1875 41.625 -15 45 C-17.97415295 49.5964182 -20.78612398 52.04479649 -26 54 C-28.875 54.1875 -28.875 54.1875 -31 54 C-30.67 55.98 -30.34 57.96 -30 60 C-30.99 60 -31.98 60 -33 60 C-36.61797753 44.23595506 -36.61797753 44.23595506 -33 37 C-34.8253125 37.0928125 -34.8253125 37.0928125 -36.6875 37.1875 C-40.59741696 37.1875 -42.87269312 36.48344958 -46 34 C-48 31 -48 31 -47.9375 28.125 C-46.77695839 24.25652796 -45.041169 22.59611988 -42 20 C-39.65897141 18.82948571 -38.10647047 18.8007754 -35.5 18.75 C-34.30890625 18.71132813 -34.30890625 18.71132813 -33.09375 18.671875 C-32.4028125 18.78015625 -31.711875 18.8884375 -31 19 C-29 22 -29 22 -29.0625 24.4375 C-30.33078746 27.9041524 -31.88535484 29.06199856 -35 31 C-38.3125 31.75 -38.3125 31.75 -41 32 C-41 31.01 -41 30.02 -41 29 C-39.865625 28.566875 -38.73125 28.13375 -37.5625 27.6875 C-36.386875 27.130625 -35.21125 26.57375 -34 26 C-33.67 25.01 -33.34 24.02 -33 23 C-36.26709987 22.77724319 -38.39572708 22.67336599 -41.3125 24.25 C-43.198782 26.2061443 -43.74000568 27.31339207 -44 30 C-43.67 30.66 -43.34 31.32 -43 32 C-39.19158639 33.2694712 -35.88289266 34.2496666 -32 33 C-30.15199899 30.78615107 -28.94621748 28.46615794 -27.60546875 25.9140625 C-23.2472466 18.00351815 -10.23104569 0 0 0 Z M-15 15 C-23.09732265 22.96484264 -23.09732265 22.96484264 -27 33 C-21.42722713 32.65880982 -16.41341747 31.31183805 -11.125 29.5625 C-10.45847412 29.34505127 -9.79194824 29.12760254 -9.10522461 28.90356445 C-6.18602948 27.91059778 -4.2086661 27.2086661 -2 25 C-8.35450323 26.24702151 -14.68327435 27.57364259 -21 29 C-19.44298069 24.32894208 -16.91552627 20.91294315 -14 17 C-14.33 16.34 -14.66 15.68 -15 15 Z M-29 45 C-30.49113354 47.5908295 -30.49113354 47.5908295 -31 50 C-28.51042165 50.91191297 -27.39294506 51.15965671 -24.89453125 50.14453125 C-24.20746094 49.70496094 -23.52039063 49.26539063 -22.8125 48.8125 C-22.11769531 48.38582031 -21.42289063 47.95914063 -20.70703125 47.51953125 C-18.71122902 45.74294757 -18.37357722 44.60388898 -18 42 C-22.23696834 39.9662552 -25.66176106 42.29241073 -29 45 Z " />
            </g>
          </svg>
        </div>
        <h1 className="text-[#0a0909] text-4xl font-bold tracking-wider mb-2">
          Haircare
        </h1>
        <h2 className="text-[#0a0909] text-xl font-semibold mb-1">
          Welcome to our Salon
        </h2>
        <hr className="w-full h-[2px] bg-[#BF925B] border-0 mb-4" />
        <p className="text-[#808080] text-m max-w-md mb-6">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. Far far away, behind
          the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <Button text="Read more" type="button" styles="" />
      </motion.div>
      <motion.div
        className="relative w-full sm:w-1/4 h-[300px] sm:h-130 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${for_women}')`,
        }}
        initial="hiddenRight"
        whileInView="visible"
        viewport={{amount: 0.3, once: true}}
        variants={sideCardVariants}
      >
        <h1 className="text-white text-2xl font-bold">For Women</h1>
        <p className="text-[#BF925B] cursor-pointer transition">
          See pricing
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-2 inline-block stroke-[#BF925B]"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
          >
            <path d="M3,12H21m-3,3,3-3L18,9" />
          </svg>
        </p>
      </motion.div>
    </section>
  );
};
