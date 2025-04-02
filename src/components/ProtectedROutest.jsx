import { Navigate } from "react-router-dom";

function ProtectedROutest({ user, children }) {
  if (user) {
    return children;
  } else{
       return <Navigate to="/register"/>

  }
}

export default ProtectedROutest;
