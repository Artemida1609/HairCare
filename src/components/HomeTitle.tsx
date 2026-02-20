import { Link } from "react-scroll";
import { Button } from "./Button";

export const HomeTitle = () => {
  return (
    <div className="flex flex-col items-center text-center gap-6 text-white px-4">
      <p className="text-sm tracking-[0.3em] uppercase text-[#BF925B] font-medium">
        Welcome to Haircare
      </p>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight max-w-4xl">
        We are professional care for your hair
      </h1>
      {/* <button className="mt-4 border-2 border-[#BF925B] px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#BF925B] transition-all duration-300">
        Book now
      </button> */}
      <Link to="book-form" smooth={true} duration={500}>
        <Button text="Book now" type="button" styles=""/>
      </Link>
    </div>
  );
};
