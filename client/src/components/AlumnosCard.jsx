import { useNavigate } from "react-router-dom";

export function AlumnosCard({ alumno }) {
  const navigate = useNavigate();

  console.log(alumno);

  return (
    <div
      onClick={() => {
        navigate(`/alumno/` + alumno.id);
      }}
    >
      <h1>{alumno.Fullname}</h1>
      <p>{alumno.Escuela}</p>
      <hr />
    </div>
  );
}
