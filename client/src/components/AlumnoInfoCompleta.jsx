import { useEffect, useState } from "react";
import { getALumnoRO } from "../api/alumnos.api";
import { useParams } from "react-router-dom";

export function AlumnoInfoCompleta() {
  const [alumno, setAlumno] = useState({});
  const params = useParams();

  useEffect(() => {
    async function loadAlumno() {
      const res = await getALumnoRO(params.id);
      setAlumno(res.data);
      console.log(res.data);
    }
    loadAlumno();
  }, [params.id]);

  return (
    <div>
      <div>
        {alumno && (
          <div>
            <h1>Nombre: {alumno.Fullname}</h1>
            <p>Escuela: {alumno.Escuela}</p>
            <p>Fecha de Nacimiento: {alumno.FechaDeNacimiento}</p>
            <p>DNI: {alumno.DNI}</p>
            <p>Legajo: {alumno.Legajo}</p>
            <p>Telefono: {alumno.telefono}</p>
            <p>Curso y turno : {alumno.Curso}</p>
            <p>Va al turno {alumno.Turno}</p>
            {alumno.Inclusion && (
              <div>
                <p>El alumno tiene inclusión: {alumno.Inclusion}</p>
                <p>Inclusion: {alumno.InclusionTexto}</p>
              </div>
            )}
            {alumno.Ausentismo && (
              <div>
                <p>El alumno tiene ausentismo: {alumno.Ausentismo}</p>
                <p>AusntismoTexto: {alumno.AusentismoTexto}</p>
              </div>
            )}
            {alumno.Conducta && (
              <div>
                <p>El alumno tiene problemas de conducta {alumno.Conducta}</p>
                <p>Conducta: {alumno.ConductaTexto}</p>
              </div>
            )}
            {alumno.Conducta && (
              <div>
                <p>El alumno tiene problemas de conducta {alumno.Conducta}</p>
                <p>Conducta: {alumno.ConductaTexto}</p>
              </div>
            )}
            {alumno.DEI && (
              <div>
                <p>El alumno tiene DEI {alumno.DEI}</p>
                <p>DEI {alumno.DEITexto}</p>
              </div>
            )}
            {alumno.Judicial && (
              <div>
                <p>el alumno tiene Judicial {alumno.Judicial}</p>
                <p>Judicial: {alumno.JudicialTexto}</p>
              </div>
            )}
            {alumno.ServicioLocal && (
              <div>
                <p>esta en ServicioLocal {alumno.ServicioLocal}</p>
                <p>ServicioLocal: {alumno.ServicioLocalTexto}</p>
              </div>
            )}
            <p>Ultima modificacion en el alumno fue en: {alumno.actualizado}</p>
          </div>
        )}
      </div>
    </div>
  );
}
