import { signOut } from "firebase/auth"
import { auth, db } from "../firebase/config"
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext"
import toast from "react-hot-toast"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

export const useLogout = () => {
  const { dispatch, user } = useGlobalContext()
  const [isPending, setIsPending] = useState(false)

  const logout = async () => {
    setIsPending(true)
    try {
      if (!user || !user.uid) {
        throw new Error("Foydalanuvchi ma'lumotlari topilmadi")
      }

      const userRef = doc(db, "users", user.uid)
      const userDoc = await getDoc(userRef)

      if (userDoc.exists()) {
        await updateDoc(userRef, {
          online: false,
        })
      } else {
        await setDoc(userRef, {
          online: false,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      }

      await signOut(auth)

      dispatch({ type: "LOGOUT" })
      toast.success("Kuningiz judayam motadil otsin!")
    } catch (error) {
      console.error("Logout xatoligi:", error.message)
      toast.error(error.message || "Chiqishda xatolik yuz berdi")
    } finally {
      setIsPending(false)
    }
  }

  return { logout, isPending }
}
