import React from "react";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div className="p-0 m-0 flex justify-center items-center bg-full-bg-color overflow-hidden">
      <div className="p-14 m-14 bg-white box-border shadow-xl">
        <div className="flex flex-row">
          <div className="flex flex-col gap-7">
            <button className="border h-24 w-96 rounded-lg border-black transition-colors hover:bg-custom-ornage ">
              <Link to="/lista-de-alumnos">Lista de alumno</Link>
            </button>
            <button className="border h-24 w-96 rounded-lg border-black transition-colors hover:bg-custom-yellow ">
              <Link to="/registrar-alumno">Registrar Alumno</Link>
            </button>
            <button className="border h-24 w-96 rounded-lg border-black transition-colors hover:bg-custom-violet">
              <Link to="/registrar-usuarios">Registrar Usuarios</Link>
            </button>
            <button className="border h-24 w-96 rounded-lg border-black transition-colors hover:bg-custom-green">
              <Link to="/administrador-alumnos">Administrador de Alumnos</Link>
            </button>
          </div>
          <div className="flex-0 flex-grow-0 flex-shrink-0 flex-basis-1/2 ml-4 hidden md:block">
            <img src="homepage.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
