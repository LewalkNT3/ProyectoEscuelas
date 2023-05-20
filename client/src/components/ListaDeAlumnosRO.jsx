import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";
import AlumnosCardRO from "./AlumnosCardRO";

export function ListaDeAlumnosRO() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    async function loadAlumnos() {
      const res = await getAllAlumnos();
      setAlumnos(res.data);
    }
    loadAlumnos();
  }, []);

  return (
    <div>
      {alumnos.map((alumno) => [
        <div key={alumno.id}>
          <AlumnosCardRO alumno={alumno} />
        </div>,
      ])}
    </div>
  );
}
