import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { user } = useGlobalContext();

  return (
    <div>
      <h1 className="text-center text-3xl mt-10 font-extrabold">
        {" "}
        Assalomu aleykum
      </h1>
      <div>
        <div className="card bg-base-100 max-w-96 shadow-sm ml-auto mr-auto mt-[50px] drop-shadow-2xl mb-[100px]">
          <figure>
            <img src={user.photoURL} alt="bnarsa" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-3xl font-extrabold">
              {user.displayName.charAt(0).toUpperCase() +
                user.displayName.slice(1)}  {""}
                xush kelibsz 
            </h2>

            <p>
                Rasmingiz yomon chiqmadi degan umiddaman 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
