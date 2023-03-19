import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import UserLayout from "@/layouts/user.layout";
import userState from "@/recoil/user";
import { getUserDoc, updateUserDoc } from "@/firebase/profile";

export default function ProfileEdit() {
  const user = useRecoilValue(userState);
  const fullnameRef = useRef("");
  const bioRef = useRef("");
  const [userDoc, setUserDoc] = useState(null);

  useEffect(() => {
    user &&
      getUserDoc(user.uid).then((userDoc) => {
        fullnameRef.current.value = userDoc.name;
        bioRef.current.value = userDoc.bio;

        setUserDoc(userDoc);
      });
  }, [user]);

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.target);
      const name = data.get("fullname") || userDoc.name;
      const bio = data.get("bio") || userDoc.bio;

      const payload = {
        ...userDoc,
        name,
        bio,
      };

      await updateUserDoc({ uid: user.uid, payload });
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <UserLayout>
      <div className="flex min-h-full w-full justify-center pb-12 px-4 sm:px-6 lg:px-8 md:mt-15 mt-10">
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-center text-3xl font-normal tracking-tight text-gray-900 ">
              Update Profile Information
            </h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <div className="space-y-3 rounded-md shadow-sm">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full Name
                </label>
                <input
                  ref={fullnameRef}
                  id="full-name"
                  name="fullname"
                  type="text"
                  autoComplete="off"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="bio" className="sr-only">
                  bio
                </label>
                <textarea
                  ref={bioRef}
                  rows="4"
                  id="bio"
                  name="bio"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-md border-0 py-3 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="few words about yourself"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-fit  justify-center rounded-md bg-indigo-600 py-2 px-8 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </UserLayout>
  );
}
