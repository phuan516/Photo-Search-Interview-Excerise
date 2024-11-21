import Head from "next/head";
import { useState } from "react";

import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";
import ImageModal from "../components/ImageModal";
import useCollections from "../hooks/useCollections";
import usePhotoData from "../hooks/usePhotos";
import usePhotographer from "../hooks/usePhotographer";

export default function Home() {
  const [showSelectedImage, setShowSelectedImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  }>();

  const {
    collections,
    currentCollection,
    showCollection,
    toggleCollectionDropdown,
    selectCollection,
  } = useCollections();

  const { photos, query, setQuery, searchPhotos, loadNextPage } =
    usePhotoData();

  const { photographer, searchPhotographer } = usePhotographer();

  console.log(photographer);

  return (
    <>
      <Head>
        <title>Interview Photos</title>
        <meta
          name="description"
          content="Disco Full Stack Developer Interview Exercise"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Header
          query={query}
          setQuery={setQuery}
          currentCollection={currentCollection}
          selectCollection={selectCollection}
          collections={collections}
          showCollection={showCollection}
          toggleCollectionDropdown={toggleCollectionDropdown}
          searchPhotos={searchPhotos}
        />
        <ImageGrid
          photos={photos}
          searchPhotographer={searchPhotographer}
          setSelectedImage={setSelectedImage}
          setShowSelectedImage={setShowSelectedImage}
        />
        <button
          className="w-full my-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            loadNextPage(currentCollection.id);
          }}
        >
          More
        </button>
        <ImageModal
          showSelectedImage={showSelectedImage}
          setShowSelectedImage={setShowSelectedImage}
          selectedImage={selectedImage}
          photographer={photographer}
        />
      </div>
    </>
  );
}
