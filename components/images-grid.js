import React, { useEffect, useRef, useState } from "react";
import { uploadPhotoToGallery } from "@/firebase/file-uploads";
import { getImages, updateImagesEntries } from "@/firebase/profile";

export default function ImagesGrid({ uid }) {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    uid &&
      getImages(uid)
        .then((doc) => {
          setUrls(doc?.urls.reverse() || []);
        })
        .catch((err) => {
          console.log({ err });
        });
  }, [uid]);

  const fileInputRef = useRef(null);

  const onAddClick = () => {
    fileInputRef.current.click();
  };

  const onInputChange = async (event) => {
    const file = event.target.files[0];

    try {
      if (
        file &&
        ["image/png", "image/jpg", "image/jpeg"].includes(file.type)
      ) {
        const url = await uploadPhotoToGallery(file);

        await updateImagesEntries({
          uid,
          url,
          isUpdate: Boolean(urls.length),
        });
        fileInputRef.current.value = null;

        setUrls((prev) => [url, ...prev]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="grid grid-cols-12 gap-3	 pb-5 max-w-7xl px-5 w-full m-auto">
        <span className="col-span-12 md:col-span-4">
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            onChange={onInputChange}
          />
          <button
            className="rounded-lg py-[150px] w-full h-full bg-slate-50 shadow hover:bg-gray-200 transition-all"
            onClick={onAddClick}
          >
            <div className="flex items-center justify-center">Add image</div>
          </button>
        </span>

        {urls.map((url) => (
          <div
            className="col-span-12 md:col-span-4 bg-slate-50 shadow flex items-center justify-center h-[400px] md:h-auto"
            key={url}
          >
            <div
              className="rounded-lg transition-all h-full w-full"
              style={{
                background: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <picture>
                <img src={url} alt="gallery picture" className="m-auto" />
              </picture> */}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
