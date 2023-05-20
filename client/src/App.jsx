import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import "./App.css";
import { AlumnosPage } from "./pages/alumnospage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { Toaster } from "react-hot-toast";
import { Homepage } from "./pages/homepage";
import { ListaDeAlumnosRO } from "./components/ListaDeAlumnosRO";
import InfoCompletaAlumno from "./pages/InfoCompletaAlumno";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/administrador-alumnos" element={<AlumnosPage />} />
          <Route path="/registrar-alumno" element={<AlumnosFormPage />} />
          <Route path="/alumno/:id" element={<AlumnosFormPage />} />
          <Route path="/lista-de-alumnos" element={<ListaDeAlumnosRO />} />
          <Route
            path="/lista-de-alumnos/alumno/:id"
            element={<InfoCompletaAlumno />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
