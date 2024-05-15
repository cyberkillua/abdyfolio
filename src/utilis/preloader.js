import React, { useState, useEffect } from "react";

export const Preloader = () => {
    const [loadedImages, setLoadedImages] = useState(0);
    const [loaderVisible, setLoaderVisible] = useState(true);
    const imageSources = [];

    useEffect(() => {
        const allImages = document.querySelectorAll("img");
        const totalImages = allImages.length;

        let loadedCount = 0;

        allImages.forEach((element) => {
          const src = element.getAttribute("src");
          const decodedSrc = decodeURIComponent(src);
          imageSources.push(decodedSrc);

          const img = new Image();
          img.src = decodedSrc;
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
    }, []); // Empty dependency array ensures the effect runs only once

    // Return loaderVisible and loadedImages as part of the component render
    return { loaderVisible, loadedImages };
};
