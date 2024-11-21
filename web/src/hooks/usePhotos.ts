import { useState, useEffect } from "react";
import { photo } from "../types/photo";

const usePhoto = () => {
  const [photos, setPhotos] = useState<photo[]>();
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchInitialPhotos();
  }, []);

  const fetchInitialPhotos = async () => {
    try {
      const response = await fetch(`${process.env.serviceURL}photos`);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log("There was an error when fetching initial photos", error);
    }
  };

  const searchPhotos = async (collectionId: number) => {
    setPage(1);
    try {
      const response = await fetch(
        `${process.env.serviceURL}photos?collectionId=${collectionId}&query=${query}&page=1`
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log("There was an error when searching for photos", error);
    }
  };

  const loadNextPage = async (collectionId: number) => {
    const nextPage = page + 1;
    try {
      const response = await fetch(
        `${process.env.serviceURL}photos?collectionId=${collectionId}&query=${query}&page=${nextPage}`
      );
      const data = await response.json();
      setPhotos((prevPhotos) => [...(prevPhotos || []), ...data]);
      setPage(nextPage);
    } catch (error) {
      console.log("There was an error when loading more photos", error);
    }
  };

  return {
    photos,
    query,
    setQuery,
    searchPhotos,
    loadNextPage,
  };
};

export default usePhoto;
