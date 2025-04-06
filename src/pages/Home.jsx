import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useCollaction from "../hooks/useCollaction";

function Home() {
  const { user } = useGlobalContext();
  const { data } = useCollaction("salomat");

  return (
    <div>
      <h1 className="text-center text-3xl mt-10 font-extrabold">
        Assalomu aleykum
      </h1>

      <div>
        <div className="card bg-amber-300 max-w-96 shadow-sm ml-auto mr-auto mt-[30px] drop-shadow-2xl mb-[50px]">
          <figure className="mt-4">
            <img className="rounded-2xl" src={user.photoURL} alt="bnarsa" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-3xl font-extrabold">
              {user.displayName.charAt(0).toUpperCase() +
                user.displayName.slice(1)}{" "}
              xush kelibsz
            </h2>

            <p className="font-bold text-amber-950">
              Shaxsiy saxifangizga xush kelibsz {user.displayName}
            </p>
          </div>
        </div>
      </div>

      {data &&
        data.map((d) => {
          return (
            <div
              className="bg-amber-300 max-w-[700px] rounded-2xl p-5 mb-6 mx-auto"
              key={d.id}
            >
              <img
                src="https://static.wixstatic.com/media/183ce0_3a3bcf40ab8d4a1abeb6d62d30576bd1~mv2.jpg/v1/fill/w_800,h_533,al_c,q_85/183ce0_3a3bcf40ab8d4a1abeb6d62d30576bd1~mv2.jpg"
                alt="mastava"
                className="rounded-xl w-full object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-amber-800">{d.title} Haqida</h2>
              <p className="max-w-[500px] text-amber-800">{d.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
