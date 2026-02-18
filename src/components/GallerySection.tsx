import { useState } from "react";
import galleryData from "../data/gallery.json";
import { motion, AnimatePresence } from "framer-motion";
import { useScreenSize } from "../hooks/useScreenSize";

export const GallerySection = () => {
  const [active, setActive] = useState<number | null>(null);
  const { screenSize } = useScreenSize();

  return (
    <section
      className="flex flex-col justify-start items-center bg-[#f5f2ea] p-12"
      id="gallery"
    >
      <p className="text-[#BF925B] text-xs font-bold uppercase tracking-[0.2em] mb-1">
        Gallery
      </p>
      <h1 className="text-[#0a0909] font-bold text-3xl sm:text-5xl uppercase tracking-[0.01em] mb-2 text-center">
        Our gallery
      </h1>
      <p className="text-[#808080] text-m text-center w-full mb-4">
        Separated they live in. A small river named Duden flows by their place
        and supplies it with the necessary regelialia.
      </p>
      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`gallery-card-${item.id}`}
            className="relative w-full aspect-square overflow-hidden group rounded-lg shadow-md"
            onClick={(e) => {
              if (screenSize === "xs" || screenSize === "sm") {
                e.stopPropagation();
                setActive(item.id);
              }
            }}
          >
            <motion.img
              layoutId={`gallery-img-${item.id}`}
              src={`${import.meta.env.BASE_URL}${item.img}`}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-130 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-[#BF925B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-end items-start h-full w-full">
                <p className="absolute bottom-4 left-4 text-white font-bold">
                  {item.title}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(item.id);
                  }}
                  className="m-2 p-2 cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 text-white m-2 cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 540.09 540.09"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M249.466,311.891l-20.349-20.35c-8.338-8.338-21.955-8.338-30.447,0L72.674,417.689v-107.1
			c0-11.857-9.715-21.496-21.497-21.496H22.49c-11.857,0-21.496,9.715-21.496,21.496v208.004c0,5.967,2.371,11.321,6.349,15.146
			c3.978,3.979,9.333,6.35,15.147,6.35h208.004c11.857,0,21.496-9.716,21.496-21.496v-28.688c0-11.857-9.715-21.497-21.496-21.497
			h-107.1l126.072-126.071C257.881,333.846,257.881,320.229,249.466,311.891z"
                    />
                    <path
                      d="M532.746,6.35C528.768,2.372,523.412,0,517.598,0H309.596c-11.857,0-21.498,9.715-21.498,21.497v28.688
			c0,11.857,9.717,21.497,21.498,21.497h107.1L290.471,197.676c-8.34,8.339-8.34,22.032,0,30.447l20.348,20.349
			c8.34,8.339,22.033,8.339,30.447,0L467.414,122.4v107.1c0,11.857,9.717,21.497,21.496,21.497h28.688
			c11.857,0,21.498-9.716,21.498-21.497V21.573C539.018,15.529,536.57,10.174,532.746,6.35z"
                    />
                  </svg>
                </button>
                <p className="absolute bottom-4 right-4 text-white font-bold">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            layoutId={`gallery-card-${active}`}
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {galleryData
              .filter((item) => item.id === active)
              .map((item) => (
                <motion.img
                  key={item.id}
                  layoutId={`gallery-img-${item.id}`}
                  src={item.img}
                  className="max-w-[80vw] max-h-[80vh] object-cover rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
