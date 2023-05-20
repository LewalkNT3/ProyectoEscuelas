import axios from "axios";

const alumnosApi = axios.create({
  baseURL: "http://localhost:8000/alumnos/ListaDeAlumnos",
});

export const getAllAlumnos = () => alumnosApi.get("/");

export const getAlumno = (id) => alumnosApi.get(`/${id}/`);

export const getALumnoRO = (id) => alumnosApi.get(`/${id}/`);

export const deleteAlumnos = (id) => alumnosApi.delete(`/${id}`);

export const createAlumno = (alumno) => alumnosApi.post("/", alumno);

export const updateAlumnos = (id, alumno) => alumnosApi.put(`/${id}/`, alumno);
