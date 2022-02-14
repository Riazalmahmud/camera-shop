import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireabaseConfig.js";

const initializationFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initializationFirebase;
