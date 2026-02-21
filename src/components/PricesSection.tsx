import { Link } from "react-scroll";
import pricesData from "../data/prices.json";

export const PricesSection = () => {
  return (
    <section className="flex flex-col justify-start items-center bg-[#f5f2ea] pb-12">
      <p className="text-[#BF925B] text-xs font-bold uppercase tracking-[0.2em]">
        Pricing
      </p>
      <h1 className="text-[#0a0909] font-bold text-3xl sm:text-5xl uppercase tracking-[0.01em] text-center">
        Our Prices
      </h1>
      <p className="text-[#808080] text-m text-center w-full mb-8 sm:mb-0">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:p-12 gap-8">
        {pricesData.map((service, index) => (
          <div
            key={index}
            className="relative w-52 sm:w-64 h-70 flex flex-col justify-start items-center border-[#BF925B] mb-4 sm:mb-0
            border-[2px] rounded-[4px] p-8 transition-all duration-300 group hover:border-[#563b4c] hover:translate-y-[-7px] hover:shadow-purple-900"
          >
            <h2 className="text-l font-bold text-[#BF925B] text-center uppercase tracking-[0.01em] mb-2 group-hover:text-[#563b4c] transition-colors">
              {service.category}
            </h2>
            {/* <p className="text-xl font-bold text-[#0a0909] uppercase tracking-[0.01em] mb-2">{`$${service.price}/session`}</p> */}
            <ul>
              {service.services.map((item, idx) => (
                <li
                  key={idx}
                  className="text-[#808080] text-bold text-m uppercase tracking-[0.01em] text-center mb-1"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <Link to="book-form" smooth={true} duration={500}>
              <button
                className="w-36 h-12 absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#BF925B] text-black text-md
            px-8 py-3 rounded-full font-bold transition-colors shadow-lg group-hover:bg-[#563b4c] group-hover:text-white
            transition-duration-300 cursor-pointer"
              >
                Get Offer
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
