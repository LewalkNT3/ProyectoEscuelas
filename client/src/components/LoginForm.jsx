import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "./BackArrow";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-proyecto-escuelas.onrender.com/users/api/login/",
        {
          username: username,
          password: password,
        }
      );
      const { access_token, is_staff } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("is_staff", is_staff);
      navigate("/homepage");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="hidden md:flex w-[480px] h-[500px] p-280 bg-[#f4f4f4] box box-border shadow-2xl justify-center items-center flex-col">
        <div className="absolute top-20 left-[425px]">
          <BackButton />
        </div>
        <h2 className="text-4xl pb-10">Inicia Sesion!</h2>
        <form onSubmit={handleLogin}>
          <div className="relative m-3 w-[310px] pb-3">
            <input
              className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuario"
            />
          </div>
          <div className="relative m-3 w-[310px] pb-3">
            <input
              className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
          </div>
          <button
            className="w-full h-[40px] cursor-pointer mb-3 border border-1 border-black  transition duration-300 ease bg-transparent hover:bg-custom-green"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="need-help">
          <p>
            Necesitas ayuda?
            <Link
              className="transition duration-300 ease bg-transparent hover:text-custom-green"
              to="/ayuda"
            >
              Contactate
            </Link>
          </p>
        </div>
      </div>
      <h2 className="text-4xl pb-10 md:hidden">Inicia Sesion!</h2>
      <form className="md:hidden" onSubmit={handleLogin}>
        <div className="relative m-3 w-[310px] pb-3">
          <input
            className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
          />
        </div>
        <div className="relative m-3 w-[310px] pb-3">
          <input
            className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
        <button
          className="w-full h-[40px] cursor-pointer mb-3 border border-1 border-black  transition duration-300 ease bg-transparent hover:bg-custom-green"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
