import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlumnosCardRO({ alumno }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lista-de-alumnos/alumno/${alumno.id}`);
  };

  return (
    <div
      className="flex justify-center items-center max-h-screen"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start max-h-[300px] max-w-[500px] p-5 m-5 bg-[#f4f4f4] w-full h-full box-border shadow-2xl gap-1 border border-1 border-black">
        <div className="font-bold text-3xl mb-2">
          <h1>{alumno.Fullname}</h1>
        </div>
        <div className="flex flex-row">
          <p>Escuela:</p>
          <p className="ml-2 font-bold">{alumno.Escuela}</p>
        </div>
        <div className="flex flex-row">
          <p className="">Curso:</p>
          <p className="ml-2 font-bold">{alumno.Curso}</p>
        </div>
        <div className="flex flex-row">
          <p>Turno:</p>
          <p className="ml-2 font-bold">{alumno.Turno}</p>
        </div>
      </div>
    </div>
  );
}
