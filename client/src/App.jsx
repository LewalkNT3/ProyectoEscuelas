import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { Toaster } from "react-hot-toast";
import { Homepage } from "./pages/homepage";
import { ListaDeAlumnosRO } from "./components/ListaDeAlumnosRO";
import { AlumnosList } from "./components/AlumnosList";
import InfoCompletaAlumno from "./pages/InfoCompletaAlumno";
import UserDetail from "./components/UserDetails";
import UserList from "./components/UserList";
import RegisterPage from "./pages/RegistrarUsuarios";
import LoginForm from "./components/LoginForm";
import PreLoginPage from "./pages/PreLoginPage";
import { useEffect } from "react";
import Layout from "./layout/layout";

function App() {
  useEffect(() => {
    document.title = "Proyecto Escuelas";
  }, []);

  const isUserLoggedIn = () => {
    return localStorage.getItem("access_token") !== null;
  };

  const isUserStaff = () => {
    return localStorage.getItem("is_staff") === "true";
  };

  const redirectToLogin = () => <Navigate to="/login" />;

  const redirectToHomepage = () => <Navigate to="/" />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bienvenidos" element={<PreLoginPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/administrador-de-estudiantes/estudiante/:id"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <AlumnosFormPage />
                ) : (
                  redirectToHomepage()
                )
              ) : (
                redirectToLogin()
              )
            }
          />
          <Route path="/" element={<Homepage />} />
          <Route
            path="/lista-de-estudiantes"
            element={
              isUserLoggedIn() ? <ListaDeAlumnosRO /> : redirectToLogin()
            }
          />
          <Route
            path="/lista-de-estudiantes/estudiante/:id"
            element={
              isUserLoggedIn() ? <InfoCompletaAlumno /> : redirectToLogin()
            }
          />
          <Route
            path="/registrar-estudiante"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <AlumnosFormPage />
                ) : (
                  redirectToHomepage()
                )
              ) : (
                redirectToLogin()
              )
            }
          />
          <Route
            path="/administrador-de-estudiantes"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <AlumnosList />
                ) : (
                  redirectToHomepage()
                )
              ) : (
                redirectToLogin()
              )
            }
          />
          <Route
            exact
            path="/users"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <UserList />
                ) : (
                  redirectToHomepage()
                )
              ) : (
                redirectToLogin()
              )
            }
          />
          <Route
            exact
            path="/registrar-usuarios"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <RegisterPage />
                ) : (
                  redirectToHomepage()
                )
              ) : (
                redirectToLogin()
              )
            }
          />
          <Route
            exact
            path="/users/:id"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <UserDetail />
                ) : (
                  redirectToHomepage()
                )
              ) : (
                redirectToLogin()
              )
            }
          />
        </Routes>
        <Toaster />
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
