import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";

export const useLogout = () => {
  const { dispatch } = useGlobalContext(); // <-- Bu yerda chaqirish kerak
  const [isPending, setIsPending] = useState(false);

  const logout = async () => {
    try {
      setIsPending(true);
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("Kuningiz judayam motadil otsin!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { logout, isPending };
};
