import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Sidebar() {
  const { user } = useGlobalContext();

  return (
    <div className=" bg-white shadow-lg rounded-2xl p-6 w-full max-w-[280px] min-h-[300px] flex flex-col items-center gap-6">
      <Avatar user={user} />

      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {user.displayName}
        </h3>
        <p className="text-sm text-gray-500">Welcome bro</p>
      </div>
    </div>
  );
}

export default Sidebar;
