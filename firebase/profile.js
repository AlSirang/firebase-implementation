import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "./config";

/// creates a new empty user document
export const setUserDoc = async ({ uid }) => {
  await setDoc(doc(firebaseDB, "users", uid), {
    name: null,
    bio: null,
    profilePicture: null,
  });
};

/// updates one or all entries in user document for a given uid(user)
export const updateUserDoc = async ({ uid, payload }) => {
  await setDoc(doc(firebaseDB, "users", uid), {
    ...payload,
  });
};

/// updates all entries in user document for a given uid(user)
export const getUserDoc = async (uid) => {
  const docRef = doc(firebaseDB, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap?.data();
};

export const updateUsersEntries = async ({ uid, payload }) => {
  const userRef = doc(firebaseDB, "users", uid);
  await updateDoc(userRef, payload);
};
