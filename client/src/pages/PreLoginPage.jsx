import React from "react";
import { Link } from "react-router-dom";

function PreLoginPage() {
  return (
    <div className="flex justify-center md:justify-start items-center max-h-screen">
      <div className="hidden md:flex flex-row-reverse items-center max-h-[90%] max-w-[90%] p-14 m-14 bg-white w-full h-full box-border shadow-xl">
        <div className="flex-0 flex-grow-0 flex-shrink-0 flex-basis-1/2 ml-4">
          <img
            className="w-800 h-auto object-cover aspect-video"
            src="/bannerprelogin-removebg-preview (1).png"
            alt="Banner"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold pb-1">Bienvenido!</h1>
          <div className="w-7/12 mt-2 text-center pb-6 pt-2">
            <p className="max-w-md mx-auto">
              loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin diam ligula, egestas eu turpis commodo, ornare malesuada
              metus. Sed maximus,
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button className="w-48 h-10 border border-1 border-black outline-none cursor-pointer text-xl transition duration-300 ease bg-transparent hover:bg-custom-green">
              <Link to="/login">Iniciar Sesión</Link>
            </button>
            <button className="w-48 h-10 border border-1 border-black outline-none cursor-pointer text-xl transition duration-300 ease bg-transparent hover:bg-custom-green">
              <Link to="/homepage">Homepage</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 md:hidden">
        <h1 className="text-4xl font-bold pb-1 mt-8">Bienvenido!</h1>
        <div className="w-7/12 mt-2 text-center pb-6 pt-2">
          <p className="max-w-md mx-auto">
            loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            diam ligula, egestas eu turpis commodo, ornare malesuada metus. Sed
            maximus,
          </p>
        </div>
        <button className="w-48 h-10 border border-1 border-black outline-none cursor-pointer text-xl transition duration-300 ease bg-transparent hover:bg-custom-green">
          <Link to="/login">Iniciar Sesión</Link>
        </button>
        <button className="w-48 h-10 border border-1 border-black outline-none cursor-pointer text-xl transition duration-300 ease bg-transparent hover:bg-custom-green">
          <Link to="/homepage">Homepage</Link>
        </button>
      </div>
    </div>
  );
}

export default PreLoginPage;
