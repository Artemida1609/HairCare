import { lazy, Suspense, useEffect, useState } from "react";
import { AppointmentSection } from "../components/AppointmentSection";
import { Header } from "../components/Header";
import { HomeTitle } from "../components/HomeTitle";
import { PricesSection } from "../components/PricesSection";
import { ServicesSection } from "../components/ServicesSection";
import { WelcomeSection } from "../components/WelcomeSection";
import header_bg from "/images/header-bg.jpg";
import { Footer } from "../components/Footer";
import { Loader } from "../features/Loader";
import { SideBar } from "../components/SideBar";

const ArtistsSection = lazy(() =>
  import("../components/ArtistsSection").then((module) => ({
    default: module.ArtistsSection,
  })),
);
const GallerySection = lazy(() =>
  import("../components/GallerySection").then((module) => ({
    default: module.GallerySection,
  })),
);
const HappyCustomerSection = lazy(() =>
  import("../components/HappyCustomerSection").then((module) => ({
    default: module.HappyCustomerSection,
  })),
);

export const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#f5f5f5] overflow-hidden">
      <span
        className={`fixed bottom-0 right-0 sm:bottom-4 sm:right-4 z-50 transition-all duration-300
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-[#BF925B] text-white 
            flex items-center justify-center hover:bg-[#a67c4f] transition-colors duration-300 cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5,15l7-7,7,7" />
          </svg>
        </button>
      </span>
      <section
        className="relative w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${header_bg}')`,
        }}
      >
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <HomeTitle />
        </div>
        <SideBar />
      </section>
      <WelcomeSection />
      <ServicesSection />
      <AppointmentSection />
      <Suspense
        fallback={
          Loader ? (
            <Loader />
          ) : (
            <div className="w-full flex justify-center py-20">
              <p className="text-[#BF925B] text-lg font-bold">Loading...</p>
            </div>
          )
        }
      >
        <ArtistsSection />

        <GallerySection />
        <PricesSection />
        <HappyCustomerSection />
      </Suspense>
      <Footer />
    </main>
  );
};
