import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import userState from "@/recoil/user";
import UserLayout from "@/layouts/user.layout";
import Image from "next/image";
import Link from "next/link";
import defaultProfilePic from "@/images/avatar.png";
import { getUserDoc, updateUsersEntries } from "@/firebase/profile";
import { uploadProfilePicture } from "@/firebase/file-uploads";

export default function ProfileIndex() {
  const user = useRecoilValue(userState);
  const inputRef = useRef(null);
  const [userDoc, setUserDoc] = useState(null);

  const onProfileImageClick = () => {
    inputRef.current.click();
  };
  const onInputChange = async (event) => {
    const file = event.target.files[0];

    try {
      console.log(file);
      if (
        file &&
        ["image/png", "image/jpg", "image/jpeg"].includes(file.type)
      ) {
        const url = await uploadProfilePicture(file);

        /// upload image to document
        const payload = {
          profilePicture: url,
        };

        await updateUsersEntries({ uid: user.uid, payload });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    user &&
      getUserDoc(user.uid).then((userDoc) => {
        setUserDoc(userDoc);
      });
  }, [user]);
  return (
    <UserLayout className="w-full">
      <div className="mb-10 py-10 bg-white rounded-sm shadow relative">
        <div className="absolute right-10">
          <Link
            href="profile/edit"
            className="border border-gray-400 px-10 rounded md:hover:bg-gray"
          >
            Edit
          </Link>
        </div>
        <div className="flex items-center flex-col">
          <div className="rounded-full overflow-hidden bg-black max-w-[150px] max-h-[150px] h-full w-full relative">
            <picture>
              <img
                src={userDoc?.profilePicture || defaultProfilePic.src}
                alt="profile"
                className="rounded-full"
              />
            </picture>

            <div className="opacity-0 hover:opacity-100 absolute left-0 right-0 top-0 bottom-0 bg-[#ffffff99] transition-all">
              <div className="w-full h-full flex items-center justify-center">
                <button
                  className="w-full h-full text-[1.4rem] "
                  onClick={onProfileImageClick}
                >
                  Edit
                </button>

                <input
                  ref={inputRef}
                  type="file"
                  className="hidden"
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center px-4 py-3 ">
            <div className="text-center mt-5">
              <h2 className="text-[2rem]">{userDoc?.name}</h2>
              <p className="text-[1rem] max-w-lg m-auto">{userDoc?.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
