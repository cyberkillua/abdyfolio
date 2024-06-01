import { useState, useEffect } from "react";

export const Preloader = () => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const allImages = document.querySelectorAll("img");
    const totalImages = allImages.length;
    let loadedCount = 0;
  
    allImages.forEach((element) => {
      const src = element.getAttribute("src");
      const img = new Image();

      img.src = src;
      img.onload = () => {
        loadedCount++;
        setLoadedImages(Math.floor((loadedCount / totalImages) * 100));

        if (loadedCount === totalImages) {
          setTimeout(() => {
            setLoaderVisible(false);
          }, 1000);
        }
      };
    });
  }, [loadedImages]);

  return { loaderVisible, loadedImages };
};
