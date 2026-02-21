import { useEffect, useState } from "react";

export const usePreloadImages = (urls: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    urls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        count += 1;
        if (count === urls.length) {
          setLoaded(true);
          console.log("All images preloaded");
        }
      };
      img.src = url;
    });
  }, []);

  return loaded;
};