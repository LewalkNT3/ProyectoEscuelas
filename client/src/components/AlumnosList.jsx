import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";
import { AlumnosCard } from "../components/AlumnosCard";

export function AlumnosList() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    async function loadAlumnos() {
      const res = await getAllAlumnos();
      console.log(res.data);
      setAlumnos(res.data);
    }
    loadAlumnos();
  }, []);

  return (
    <div>
      {alumnos.map((alumno) => (
        <AlumnosCard key={alumno.id} alumno={alumno} />
      ))}
    </div>
  );
}
