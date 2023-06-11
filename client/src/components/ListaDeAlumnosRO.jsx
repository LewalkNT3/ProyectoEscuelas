import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";
import AlumnosCardRO from "./AlumnosCardRO";
import BackButton from "./BackArrow";

export function ListaDeAlumnosRO() {
  const [alumnos, setAlumnos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [filtroCurso, setFiltroCurso] = useState("");
  const [filtroEscuela, setFiltroEscuela] = useState("");
  const [filtroTurno, setFiltroTurno] = useState("");

  const handleFiltroChange = (event) => {
    const valorFiltro = event.target.value.toLowerCase();
    setFiltro(valorFiltro);
  };

  const handleFiltroCursoChange = (event) => {
    const valorFiltroCurso = event.target.value.toLowerCase();
    setFiltroCurso(valorFiltroCurso);
  };

  const handleFiltroEscuelaChange = (event) => {
    const valorFiltroEscuela = event.target.value.toLowerCase();
    setFiltroEscuela(valorFiltroEscuela);
  };

  const handleFiltroTurnoChange = (event) => {
    const valorFiltroTurno = event.target.value.toLowerCase();
    setFiltroTurno(valorFiltroTurno);
  };

  useEffect(() => {
    let timerId;

    async function loadAlumnos() {
      const res = await getAllAlumnos();
      const filteredAlumnos = res.data.filter(
        (alumno) =>
          alumno.Fullname.toLowerCase().includes(filtro) &&
          alumno.Curso.toLowerCase().includes(filtroCurso) &&
          alumno.Escuela.toLowerCase().includes(filtroEscuela) &&
          alumno.Turno.toLowerCase().includes(filtroTurno)
      );
      setAlumnos(filteredAlumnos);
    }

    const delayLoadAlumnos = () => {
      clearTimeout(timerId);
      timerId = setTimeout(loadAlumnos, 0);
    };

    delayLoadAlumnos();

    return () => {
      clearTimeout(timerId);
    };
  }, [filtro, filtroCurso, filtroEscuela, filtroTurno]);

  return (
    <div className="flex flex-row items-start justify-center min-h-screen bg-full-bg-color">
      <div className="flex flex-col items-center max-w-screen-sm p-6 bg-white w-full h-full box-border shadow-xl">
        <div className="flex flex-row w-[90%] self-start">
          <div className="m-3">
            <BackButton />
          </div>
          <input
            className="w-[65%] sm:w-full p-3 ml-6 border border-black mb-5 rounded-full"
            type="text"
            value={filtro}
            onChange={handleFiltroChange}
            placeholder="Filtrar alumnos"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="border border-black p-3 rounded-xl">
            <select value={filtroCurso} onChange={handleFiltroCursoChange}>
              <option value="">Todos los cursos</option>
              <option value="1ro 1ra">1ro 1ra</option>
              <option value="1ro 2da">1ro 2da</option>
              <option value="1ro 3ra">1ro 3ra</option>
              <option value="1ro 4ta">1ro 4ta</option>
              <option value="2do 1ra">2do 1ra</option>
              <option value="2do 2da">2do 2da</option>
              <option value="2do 3ra">2do 3ra</option>
              <option value="2do 4ta">2do 4ta</option>
              <option value="3ro 1ra">3ro 1ra</option>
              <option value="3ro 2da">3ro 2da</option>
              <option value="3ro 3ra">3ro 2da</option>
              <option value="3to 4ta">3ro 2da</option>
              <option value="4to 1ra">4to 1ra</option>
              <option value="4to 2da">4to 2da</option>
              <option value="4to ArLi">4to ArLi</option>
              <option value="4to Com">4to Com</option>
              <option value="5to 1ra">5to 1ra</option>
              <option value="5to 2da">5to 2da</option>
              <option value="5to ArLi">5to ArLi</option>
              <option value="5to Com">5to Com</option>
              <option value="6to 1ra">6to 1ra</option>
              <option value="6to 1ra">6to 2da</option>
              <option value="6to ArLi">6to ArLi</option>
              <option value="6to Com">6to Com</option>
            </select>
          </div>
          <div className="border border-black p-3 rounded-xl">
            <select value={filtroEscuela} onChange={handleFiltroEscuelaChange}>
              <option value="">Todos las escuelas</option>
              <option value="ES N°37">ES N°37</option>
              <option value="ES N°46">ES N°46</option>
            </select>
          </div>
          <div className="border border-black p-3 rounded-xl">
            <select value={filtroTurno} onChange={handleFiltroTurnoChange}>
              <option value="">Todos los turnos</option>
              <option value="Tm">Mañana</option>
              <option value="Tt">Tarde</option>
              <option value="Tn">Noche</option>
            </select>
          </div>
        </div>
        {alumnos.map((alumno) => (
          <div
            className="min-w-full sm:w-[50%] md:w-[30%] lg:w-[20%]"
            key={alumno.id}
          >
            <AlumnosCardRO alumno={alumno} />
          </div>
        ))}
      </div>
    </div>
  );
}
