// ImageModal.tsx
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { photographer } from "../types/photographer";

interface ImageModalProps {
  showSelectedImage: boolean;
  setShowSelectedImage: (show: boolean) => void;
  selectedImage: { url: string; title: string } | undefined;
  photographer: photographer | undefined;
}

const ImageModal: React.FC<ImageModalProps> = ({
  showSelectedImage,
  setShowSelectedImage,
  selectedImage,
  photographer,
}) => {
  return (
    <Dialog
      open={showSelectedImage}
      onClose={setShowSelectedImage}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5">
              {photographer ? (
                <div className="mt-3 text-center">
                  <img src={selectedImage?.url} alt={selectedImage?.title} />
                  <div className="mt-2 ml-2 flex flex-row">
                    {photographer.profile_image_url ? (
                      <img
                        src={photographer.profile_image_url}
                        className="size-14 rounded-full"
                        alt="Photographer"
                      />
                    ) : (
                      <img
                        src={`https://avatar.iran.liara.run/public`}
                        className="size-14"
                        alt="Default Avatar"
                      />
                    )}
                    <div className="grow flex flex-col items-start ml-4">
                      <div className="font-bold text-lg text-left">
                        {photographer.name}
                      </div>
                      <div className="text-sky-500 text-sm text-left">
                        {photographer.twitter_username &&
                          `@${photographer.twitter_username}`}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-right">
                      {photographer.location}
                    </div>
                  </div>
                </div>
              ) : (
                <div>Loading ...</div>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageModal;
