import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import BackButton from "./BackArrow";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdminChange = (event) => {
    setIsStaff(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      username: username,
      password: password,
      is_staff: isStaff,
    };

    axios
      .post(
        "https://backend-proyecto-escuelas.onrender.com/users/api/register/",
        userData
      )
      .then((response) => {
        toast.success("Registration successful!");
        navigate("/administrador-alumnos");
      })
      .catch((error) => {
        setError(error.response.data.detail);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-full-bg-color">
      <div className="hidden md:flex justify-center items-center flex-col w-[480px] h-[500px] p-280 bg-white box shadow-2xl">
        <div className="self-start px-7">
          <BackButton />
        </div>
        <h2 className="text-4xl pb-10">Registro de cuentas</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="relative m-3 w-[310px] pb-3">
            <input
              className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Usuario"
            />
          </div>
          <div className="relative m-3 w-[310px] pb-6 ">
            <input
              className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
              placeholder="Contrasena"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            className="w-full h-[40px] cursor-pointer mb-3 border border-1 border-black  transition duration-300 ease bg-transparent hover:bg-custom-green"
            type="submit"
          >
            Register
          </button>
        </form>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isStaff}
            onChange={handleAdminChange}
          />
          <span className="checkmark"></span>
          <span className="ml-2">Es administrador?</span>
        </label>
      </div>
      <h2 className="text-4xl pb-10 md:hidden">Registro de cuentas</h2>
      <form className="md:hidden" onSubmit={handleSubmit}>
        <div className="relative m-3 w-[310px] pb-3">
          <input
            className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Usuario"
          />
        </div>
        <div className="relative m-3 w-[310px] pb-6 ">
          <input
            className="w-full h-12 bg-transparent border-b-2 border-black text-lg p-3 outline-none"
            placeholder="Contrasena"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="w-full h-[40px] cursor-pointer mb-3 border border-1 border-black  transition duration-300 ease bg-transparent hover:bg-custom-green"
          type="submit"
        >
          Register
        </button>
      </form>
      <label className="checkbox-container md:hidden">
        <input type="checkbox" checked={isStaff} onChange={handleAdminChange} />
        <span className="checkmark"></span>
        <span className="ml-2">Es administrador?</span>
      </label>
    </div>
  );
};

export default RegistrationForm;
