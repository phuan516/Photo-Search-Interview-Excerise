import { useState } from "react";
import { photographer } from "../types/photographer";

const usePhotographer = () => {
  const [photographer, setPhotographer] = useState<photographer>();

  const searchPhotographer = async (photographerId: number) => {
    try {
      const response = await fetch(
        `${process.env.serviceURL}photographer?photographerId=${photographerId}`
      );
      const data = await response.json();
      setPhotographer(data);
    } catch (error) {
      console.log("There was an error when searching for photographer", error);
    }
  };

  return {
    photographer,
    searchPhotographer,
  };
};

export default usePhotographer;
