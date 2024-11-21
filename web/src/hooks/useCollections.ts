import { useState, useEffect } from "react";
import { collection } from "../types/collection";

const useCollections = () => {
  const [collections, setCollections] = useState<collection[]>();
  const [currentCollection, setCurrentCollection] = useState<collection>({
    id: 0,
    title: "Collections",
  });
  const [showCollection, setShowCollection] = useState(false);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const response = await fetch(`${process.env.serviceURL}collections`);
      const data = await response.json();
      setCollections(data);
    } catch (error) {
      console.log(
        "There was an error when fetching from the collection API",
        error
      );
    }
  };

  const toggleCollectionDropdown = () => {
    setShowCollection(!showCollection);
  };

  const selectCollection = (collection: collection) => {
    setCurrentCollection(collection);
    setShowCollection(false);
  };

  return {
    collections,
    currentCollection,
    showCollection,
    toggleCollectionDropdown,
    selectCollection,
  };
};

export default useCollections;
