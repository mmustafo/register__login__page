import { useContext } from "react";
import { GLobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
     const context = useContext(GLobalContext)
     if(!context){
          throw new Error('useGlobal context notogri ishlatilgan')
     }
     return context
}