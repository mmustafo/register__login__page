import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; 

import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const login = async (email, password) => {
    try {
      setIsPending(true);
      const auth = getAuth(); 
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;
      toast.success(`Szni qayta korganmadan hursandman :) ${user.displayName}`);
      
     
      await updateProfile(auth.currentUser, {
        displayName: user.displayName, 
        photoURL: `https://api.dicebear.com/9.x/open-peeps/svg?seed=${user.displayName}`,
      });

      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, login };
};
