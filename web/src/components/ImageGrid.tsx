import { photo } from "../types/photo";

interface ImageGridProps {
  photos?: photo[];
  searchPhotographer: (photographerId: number) => void;
  setSelectedImage: ({ url, title }: { url: string; title: string }) => void;
  setShowSelectedImage: (show: boolean) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  photos,
  searchPhotographer,
  setSelectedImage,
  setShowSelectedImage,
}) => {
  if (!photos) {
    return (
      <img
        src="/Rolling@1x-1.0s-200px-200px.svg"
        alt="Loading..."
        className="mt-48 mx-auto"
      />
    );
  }

  if (photos.length === 0) {
    return (
      <div
        className="flex flex-col m-10 p-4 items-center bg-red-100 border border-red-400 text-red-700 rounded-lg"
        role="alert"
      >
        <strong className="font-bold">No results found!</strong>
        <span className="">Please try a different search.</span>
      </div>
    );
  }

  return (
    <div className="mt-48 lg:mt-40 mx-8 gap-4 columns-xs">
      {photos.map((photo: photo) => (
        <img
          src={photo.url}
          className="mb-4 object-contain hover:cursor-pointer"
          key={photo.id}
          onClick={() => {
            setSelectedImage({ url: photo.url, title: photo.description });
            searchPhotographer(photo.id);
            setShowSelectedImage(true);
          }}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
