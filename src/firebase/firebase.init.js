import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializingAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializingAuthentication;
