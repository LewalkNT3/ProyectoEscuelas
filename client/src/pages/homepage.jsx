import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Homepage() {
  const navigate = useNavigate();
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (shouldReload) {
      setShouldReload(true);
      window.location.reload();
    }
  }, [shouldReload]);

  const handleClickListaAlumnosDeAlumnos = () => {
    navigate(`/lista-de-alumnos`);
  };
  const handleClickListaCrearAlumnos = () => {
    navigate(`/registrar-alumno`);
  };
  const handleClickRegistrarUsuario = () => {
    navigate(`/registrar-usuarios`);
  };
  const handleClickAdminDeAlumnos = () => {
    navigate(`/administrador-alumnos`);
  };

  return (
    <div className="p-0 m-0 flex h-screen justify-center items-center bg-full-bg-color overflow-hidden">
      <div className="p-14 m-14 bg-white box-border shadow-xl">
        <div className="flex flex-row">
          <div className="flex flex-col gap-7 text-center">
            <h1 className="text-5xl xl:hidden md:hidden">Homepage</h1>
            <div
              className="border h-24 w-96 sm:w-72 md:w-96 rounded-lg border-black transition-colors hover:bg-custom-ornage flex items-center justify-center"
              onClick={handleClickListaAlumnosDeAlumnos}
            >
              <p className="text-sm">Estudiantes</p>
            </div>
            <div
              className="border h-24 w-96 sm:w-72 md:w-96 rounded-lg border-black transition-colors hover:bg-custom-ornage flex items-center justify-center"
              onClick={handleClickListaCrearAlumnos}
            >
              <p className="text-sm">Registra Estudiantes</p>
            </div>
            <div
              className="border h-24 w-96 sm:w-72 md:w-96 rounded-lg border-black transition-colors hover:bg-custom-ornage flex items-center justify-center"
              onClick={handleClickAdminDeAlumnos}
            >
              <p className="text-sm">Modificar estudiantes</p>
            </div>
            <div
              className="border h-24 w-96 sm:w-72 md:w-96 rounded-lg border-black transition-colors hover:bg-custom-ornage flex items-center justify-center"
              onClick={handleClickRegistrarUsuario}
            >
              <p className="text-sm">Registra Usuarios</p>
            </div>
          </div>
          <div className="hidden xl:block md:block flex-0 flex-grow-0 flex-shrink-0 flex-basis-1/2 ml-10 pt-16 text-center">
            <div className="text-center text-5xl">
              <h1>¿Qué queres hacer?</h1>
            </div>
            <div className="">
              <img src="homepage.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
