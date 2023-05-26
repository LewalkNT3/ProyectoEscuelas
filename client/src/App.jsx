import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";
import { AlumnosPage } from "./pages/AlumnosPage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { Toaster } from "react-hot-toast";
import { Homepage } from "./pages/homepage";
import { ListaDeAlumnosRO } from "./components/ListaDeAlumnosRO";
import InfoCompletaAlumno from "./pages/InfoCompletaAlumno";
import UserDetail from "./components/UserDetails";
import UserList from "./components/UserList";
import RegisterPage from "./pages/RegistrarUsuarios";
import LoginForm from "./components/LoginForm";

function App() {
  // Función auxiliar para verificar si el usuario es staff
  const isUserStaff = () => {
    const isStaff = localStorage.getItem("is_staff");
    return isStaff === "true";
  };

  // Función para redirigir al usuario a "/homepage" si no es staff
  const redirectToHomepage = () => <Navigate to="/homepage" />;

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/alumno/:id" element={<AlumnosFormPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/lista-de-alumnos" element={<ListaDeAlumnosRO />} />
          <Route
            path="/lista-de-alumnos/alumno/:id"
            element={<InfoCompletaAlumno />}
          />
          <Route
            path="/registrar-alumno"
            element={isUserStaff() ? <AlumnosFormPage /> : redirectToHomepage}
          />
          <Route
            path="/administrador-alumnos"
            element={isUserStaff() ? <AlumnosPage /> : redirectToHomepage}
          />
          <Route
            exact
            path="/users"
            element={isUserStaff() ? <UserList /> : redirectToHomepage}
          />
          <Route
            exact
            path="/register"
            element={isUserStaff() ? <RegisterPage /> : redirectToHomepage}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
