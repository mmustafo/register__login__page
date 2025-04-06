import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";

export const useGoogleProvider = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false); // ✅ XATO TUZATILDI
  const [data, setData] = useState(null);

  const googleProvider = async () => {
    try {
      setIsPending(true); // ✅ To'g'ri ishlashi uchun state set qilindi
      const provider = new GoogleAuthProvider();
      const req = await signInWithPopup(auth, provider);
      const user = req.user;

      dispatch({ type: "LOGIN", payload: user });
      setData(user);
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false); 
    }
  };

  return { isPending, data, googleProvider };
};
