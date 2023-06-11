import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/">
        <h1>Proyecto Escuelas</h1>
      </Link>
      {localStorage.getItem("access_token") && (
        <>
          {localStorage.getItem("is_staff") && (
            <>
              <button>
                <Link to="/registrar-alumno">Registrar Alumno</Link>
              </button>
              <button>
                <Link to="/administrador-alumnos">Administrar los Alumnos</Link>
              </button>
              <button>
                <Link to="/register">Registrar una cuenta</Link>
              </button>
            </>
          )}
          <button>
            <Link to="/login">Iniciar Sesión</Link>
          </button>
          <button>
            <Link to="/lista-de-alumnos">Lista de Alumnos</Link>
          </button>
        </>
      )}
    </div>
  );
}
