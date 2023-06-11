import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [data, setData] = useState();

  const getMedia = () => {
    if (window) return window.matchMedia(query).matches;
    return false;
  };

  const handleMedia = () => {
    setData(getMedia());
  };

  useEffect(() => {
    const media = window.matchMedia(query);
    handleMedia();
    if (media.addListener) {
      media.addListener(handleMedia);
    } else {
      media.addEventListener("change", handleMedia);
    }
    return () => {
      if (media.removeListener) {
        media.removeListener(handleMedia);
      } else {
        media.removeEventListener("change", handleMedia);
      }
    };
  }, []);
  return data;
};
export default useMediaQuery;
