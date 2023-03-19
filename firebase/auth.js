import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "./config";

export const auth = getAuth(firebaseApp);

export const onAuthenticationStateChange = async (cb = () => null) => {
  onAuthStateChanged(auth, cb);
};

/// sign in
export const firebaseSignInWithEmailAndPassword = async ({
  email,
  password,
}) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/// sign up
export const firebaseSignUpWithEmailAndPassword = async ({
  email,
  password,
}) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/// sign out

export const firebaseSignOut = async () => {
  return signOut(auth);
};
