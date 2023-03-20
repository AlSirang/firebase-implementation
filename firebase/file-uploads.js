import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { firebaseStorage } from "./config";

export const uploadProfilePicture = async (file) => {
  const profileImageRef = ref(firebaseStorage, `/profile-pics/${file.name}`);

  const uploadTask = uploadBytesResumable(profileImageRef, file);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        console.log(progress);
      },
      (error) => {
        // Handle unsuccessful uploads

        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    );
  });
};

export const uploadPhotoToGallery = async (file) => {
  const profileImageRef = ref(firebaseStorage, `/gallery/${file.name}`);

  const uploadTask = uploadBytesResumable(profileImageRef, file);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        console.log(progress);
      },
      (error) => {
        // Handle unsuccessful uploads

        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    );
  });
};
