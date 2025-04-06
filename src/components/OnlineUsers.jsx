import React from "react";
import useCollaction from "../hooks/useCollaction";

function OnlineUsers() {
  const { data } = useCollaction("users");
  console.log(data);

  return (
    <div className="flex gap-4 flex-wrap justify-center p-4">
      {data?.map((d) => (
        <div
          key={d.id}
          className={`flex items-center gap-4 max-w-[500px] w-full rounded-2xl shadow-2xl 
            ${d.online ? "bg-green-100" : "bg-red-100"}`}
        >
          <div className="p-5 rounded-2xl w-full flex items-center gap-4">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={d.photoURL}
              alt={`${d.displayName} profile`}
            />
            <div>
              <h1 className="font-semibold text-lg">{d.displayName}</h1>
              <p className={d.online ? "text-green-600" : "text-red-600"}>
                {d.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnlineUsers;
