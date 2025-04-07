import { addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import toast from "react-hot-toast";

const initialState = {
  isPending: false,
  error: null,
  success: true,
  data: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_PENDING":
      return { isPending: true, error: null, success: true, data: null };
    case "ERROR":
      return { isPending: false, error: payload, success: false, data: null };
    case "SUCCESS":
      return { isPending: false, error: null, success: true, data: payload };
    default:
      return state;
  }
};  

export const useFirebase = (c) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const checkCanceled = (action) => {
    if (!isCanceled) {
      dispatch(action);
    }
  };
  const addDocument = async () => {
    try {
      checkCanceled({ type: "IS_PENDING", payload: true });
      const res = await addDoc(collection(db, c), data);
      checkCanceled({ type: "SUCCESS", payload: res });
      toast.success("Success");
    } catch (error) {
      checkCanceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      checkCanceled({ type: "IS_PENDING", payload: false });
    }
  };
  const updateDocument = async (id, data) => {
    const ref = doc(db, c, id);
    try {
      checkCanceled({ type: "IS_PENDING", payload: true });
      const res = await updateDoc(ref, data);
      toast.success("Success");
      checkCanceled({ type: "SUCCESS", payload: res });
    } catch (error) {
      checkCanceled({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      checkCanceled({ type: "IS_PENDING", payload: false });
    }
  };
  const deleteDocument = async (id) => {
   
    try {
        checkCanceled({ type: "IS_PENDING", payload: true });
        await deleteDoc(doc(db, c, id));
        toast.success("Success");
      } catch (error) {
        checkCanceled({ type: "ERROR", payload: error.message });
        toast.error(error.message);
      } finally {
        checkCanceled({ type: "IS_PENDING", payload: false });
      }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);
  return { ...state, updateDocument, deleteDocument, addDocument };
};