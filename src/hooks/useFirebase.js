import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  const handleRegistration = (name, email, password, history, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, { displayName: name })
          .then()
          .catch((error) => setError(error.message));
        Swal.fire("Good job!", "Your registration is successful!", "success");
        setIsLoading(false);
        history.push(location);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googleLogin = (history, location) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        history.push(location);
      })
      .catch((error) => setError(error.message));
  };
  const emailLogin = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        setError("");
        // Alert
        let timerInterval;
        Swal.fire({
          title: "You have logged in successfully!",
          html: "You are redirecting to your <b></b> desired page.",
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {});

        history.push(location);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => setIsLoading(false))
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    isLoading,
    setIsLoading,
    handleRegistration,
    emailLogin,
    logout,
    setError,
    googleLogin,
  };
};

export default useFirebase;
