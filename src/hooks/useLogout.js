import { signOut } from "firebase/auth"
import { auth, db } from "../firebase/config"
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext"
import toast from "react-hot-toast"
import { doc, updateDoc } from "firebase/firestore"

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
      await updateDoc(userRef, {
        online: false,
      })

     
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
