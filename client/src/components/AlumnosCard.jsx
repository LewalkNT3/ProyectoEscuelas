import { useNavigate } from "react-router-dom";

export function AlumnosCard({ alumno }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center items-center max-h-screen"
      onClick={() => {
        navigate(`/administrador-de-alumnos/estudiante + alumno.id`);
      }}
    >
      <div className="flex flex-col items-start max-h-[300px] max-w-[500px] sm:max-w-[400px] p-5 m-5 bg-[#f4f4f4] w-full h-full box-border shadow-2xl gap-1 border border-1 border-black">
        <div className="font-bold text-3xl mb-2">
          <h1>{alumno.Fullname}</h1>
        </div>
        <div className="flex flex-row">
          <p className="">Escuela: </p>
          <p className="ml-2 font-bold">{alumno.Escuela}</p>
        </div>
        <div className="flex flex-row">
          <p>Curso:</p>
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
