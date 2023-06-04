import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import PreLoginPage from "./pages/PreLoginPage";
import "./index.css";
import "./app.css";

function App() {
  const isUserLoggedIn = () => {
    return localStorage.getItem("access_token") !== null;
  };

  const isUserStaff = () => {
    return localStorage.getItem("is_staff") === "true";
  };

  const redirectToLogin = () => <Navigate to="/" />;

  const redirectToHomepage = () => <Navigate to="/homepage" />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreLoginPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/administrador-alumnos/alumno/:id"
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
            path="/homepage"
            element={isUserLoggedIn() ? <Homepage /> : redirectToLogin()}
          />
          <Route
            path="/lista-de-alumnos"
            element={
              isUserLoggedIn() ? <ListaDeAlumnosRO /> : redirectToLogin()
            }
          />
          <Route
            path="/lista-de-alumnos/alumno/:id"
            element={
              isUserLoggedIn() ? <InfoCompletaAlumno /> : redirectToLogin()
            }
          />
          <Route
            path="/registrar-alumno"
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
            path="/administrador-alumnos"
            element={
              isUserLoggedIn() ? (
                isUserStaff() ? (
                  <AlumnosPage />
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
      </BrowserRouter>
    </>
  );
}

export default App;
