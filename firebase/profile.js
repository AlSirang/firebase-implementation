import { doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "./config";

export const setUserDoc = async ({ uid }) => {
  await setDoc(doc(firebaseDB, "users", uid), {
    name: null,
    bio: null,
    profilePicture: null,
  });
};
