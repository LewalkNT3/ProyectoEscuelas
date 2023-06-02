import React from "react";
import "../styles/PreLoginPage.css";
import { Link } from "react-router-dom";

function PreLoginPage() {
  return (
    <div className="flex justify-center items-center max-h-screen box-decoration">
      <div className="flex flex-row-reverse items-center max-h-[90%] max-w-[90%] p-14 m-14 bg-white w-full h-full box-border shadow-xl">
        <div className="flex-0 flex-grow-0 flex-shrink-0 flex-basis-1/2 ml-4">
          <img
            className="w-[570px]  h-[500px]"
            src="/bannerprelogin-removebg-preview (1).png"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold pb-1">Bienvenido!</h1>
          <p className="w-7/12 mt-2 text-center pb-6 pt-2">
            loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            diam ligula, egestas eu turpis commodo, ornare malesuada metus. Sed
            maximus, arcu et suscipit semper, velit eros hendrerit neque, eu
            ullamcorper purus ex sed urna. Proin rhoncus urna non nisi egestas,
            eu vehicula libero auctor.
          </p>
          <div className="flex justify-center">
            <button className="w-48 h-10 border border-1 border-black outline-none cursor-pointer text-xl transition duration-300 ease bg-transparent hover:bg-custom-green">
              <Link to="/login">Inicia Sesion</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLoginPage;
