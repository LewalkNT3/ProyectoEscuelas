import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/">
        <h1>Proyecto Escuelas</h1>
      </Link>
      <button>
        <Link to="/registrar-alumno">Registrar Alumno</Link>
      </button>
      <button>
        <Link to="/administrador-alumnos">Administra los Alumnos</Link>
      </button>
      <button>
        <Link to="/lista-de-alumnos">Lista de Alumnos</Link>
      </button>
    </div>
  );
}
