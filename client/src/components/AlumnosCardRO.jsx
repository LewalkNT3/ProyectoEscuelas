import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlumnosCardRO({ alumno }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lista-de-alumnos/alumno/${alumno.id}`);
  };

  return (
    <div onClick={handleClick}>
      <h1>{alumno.Fullname}</h1>
      <p>{alumno.Escuela}</p>
      <p>{alumno.Curso}</p>
      <p>{alumno.Turno}</p>
      <hr />
    </div>
  );
}
