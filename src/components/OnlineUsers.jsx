import React from "react";
import useCollaction from "../hooks/useCollaction";

function OnlineUsers() {
  const { data } = useCollaction("users");

  return (
    <section className="py-10 px-4 bg-[#fefaf4] min-h-screen">
      <h2 className="text-2xl font-bold text-center text-amber-800 mb-8">
       users
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {data?.map((d) => (
          <div
            key={d.id}
            className={`flex items-center gap-4 w-full max-w-sm p-4 rounded-2xl shadow-md transition
              ${d.online ? "bg-green-50 border border-green-300" : "bg-red-50 border border-red-300"}`}
          >
            <img
              className={`w-[50px] h-[50px] rounded-full object-cover border-2 ${
                d.online ? "border-green-400" : "border-red-400"
              }`}
              src={d.photoURL}
              alt={`${d.displayName} profile`}
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800">
                {d.displayName}
              </h3>
              <span
                className={`text-sm font-medium ${
                  d.online ? "text-green-600" : "text-red-600"
                }`}
              >
                {d.online ? "🟢 Online" : "🔴 Offline"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OnlineUsers;
