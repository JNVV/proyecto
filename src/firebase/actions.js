import { addDoc, collection } from "firebase/firestore";
import { FirebaseAuth, FirebaseDB } from "./config";

export const saveTask = async (valueForm) => {
    const { uid } = FirebaseAuth.currentUser;
    await addDoc(collection(FirebaseDB, `/request/${uid}/task`), valueForm);
};
