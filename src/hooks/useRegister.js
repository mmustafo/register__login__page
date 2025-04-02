import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // to‘g‘ri import qilindi
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";

export const useRegister = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const register = async (displayName, email, password) => {
    try {
      setIsPending(true);
      const auth = getAuth(); // getAuth orqali auth instansiyasini olish
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/open-peeps/svg?seed=${displayName}`,
      });
      const user = req.user;
      toast.success(`Xush kelibsz ${user.displayName}`);

      dispatch({ type: "LOGIN", payload: user });
      setData(user);
      console.log(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, register };
};
