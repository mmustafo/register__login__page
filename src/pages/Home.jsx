import React from "react";
import Navbar from "../components/Navbar";
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
              <h1 className="text-center text-5xl font-bold mb-5 text-amber-800">
                {d.title}
              </h1>
              <img
                src={d.cookingimages}
                alt="mastava"
                className="rounded-xl w-full object-cover mb-4"
              />

              
              {d.ingredients && (
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-amber-800">
                    {d.title} uchun keraklik mahsulotlar
                  </h3>
                  <ul className="list-disc pl-5 flex gap-4 mb-4">
                    {d.ingredients.map((max, id) => (
                      <h4 key={max} className="text-amber-800 ">
                        {max}
                      </h4>
                    ))}
                  </ul>
                </div>
              )}

              <h2 className="text-2xl font-bold text-amber-800">
                {d.title} Haqida
              </h2>
              <p className="max-w-[500px] text-amber-800">{d.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
