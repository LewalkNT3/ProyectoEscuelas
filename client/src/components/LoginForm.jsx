import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "./BackArrow";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPolicyDialog, setShowPolicyDialog] = useState(false); // Estado para mostrar/ocultar el diálogo
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

      // Mostrar el diálogo de política y privacidad
      setShowPolicyDialog(true);
      toast.success("Inicio de sesión exitoso"); // Mostrar el mensaje de éxito
    } catch (error) {
      toast.error("El inicio de sesión es inválido");
    }
  };

  const handleAcceptPolicy = () => {
    // Ocultar el diálogo
    setShowPolicyDialog(false);

    // Navegar a la página de inicio
    navigate(`/`);
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="hidden md:flex w-[480px] h-[500px] p-280 bg-[#f4f4f4] box box-border shadow-2xl justify-center items-center flex-col">
        <div className="self-start px-7">
          <BackButton />
        </div>
        <h2 className="text-4xl pb-10">Inicia Sesión!</h2>
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
      <h2 className="text-4xl pb-10 md:hidden">Inicia Sesión!</h2>
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

      {/* Diálogo de política y privacidad */}
      {showPolicyDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-2xl mb-4">Política y Privacidad</h2>
            <p>
              Profesores, está página fue creada para la mejor articulación del
              equipo de orientación y ustedes. Recuerden que posee información
              confidencial que no se debe difundir
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleAcceptPolicy}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
