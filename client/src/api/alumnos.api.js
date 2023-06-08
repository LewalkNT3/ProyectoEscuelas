import axios from "axios";

const alumnosApi = axios.create({
  baseURL:
    "https://backend-proyecto-escuelas.onrender.com/alumnos/ListaDeAlumnos",
});

export const getAllAlumnos = () => alumnosApi.get("/");

export const getAlumno = (id) => alumnosApi.get(`/${id}/`);

export const getALumnoRO = (id) => alumnosApi.get(`/${id}/`);

export const deleteAlumnos = (id) => alumnosApi.delete(`/${id}`);

export const createAlumno = (alumno) => alumnosApi.post("/", alumno);

export const updateAlumnos = (id, alumno) => alumnosApi.put(`/${id}/`, alumno);
