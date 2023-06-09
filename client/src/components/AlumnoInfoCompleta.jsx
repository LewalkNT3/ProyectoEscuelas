import { useEffect, useState } from "react";
import { getALumnoRO } from "../api/alumnos.api";
import { useParams } from "react-router-dom";
import BackButton from "./BackArrow";
export function AlumnoInfoCompleta() {
  const [alumno, setAlumno] = useState({});
  const params = useParams();

  useEffect(() => {
    async function loadAlumno() {
      const res = await getALumnoRO(params.id);
      setAlumno(res.data);
    }
    loadAlumno();
  }, [params.id]);

  return (
    <>
      <div className="flex justify-center items-centerh-screen h-max bg-full-bg-color">
        <div className="flex flex-col items-center xl:max-h-max xl:max-w-[65%] sm:max-w-[100%] sm:max-h-[100%] p-14 m-14 bg-white w-full h-full box-border shadow-xl">
          {alumno && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-center items-center">
                <div className="pb-4">
                  <BackButton />
                </div>
                <h1 className="text-center font-bold text-3xl mb-5 px-3">
                  Información completa de {alumno.Fullname}{" "}
                </h1>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border p-2 text-center w-2/6 border-r-black">
                  Nombre
                </label>
                <h1 className="p-2 w-3/6 ">{alumno.Fullname}</h1>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  Escuela
                </label>
                <p className="p-2 w-3/6">{alumno.Escuela}</p>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  Fecha de Nacimiento
                </label>
                <p className="p-2 w-2/6">{alumno.FechaDeNacimiento}</p>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  DNI
                </label>
                <p className="p-2 w-3/6">{alumno.DNI}</p>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  Legajo
                </label>
                <p className="p-2 w-3/6">{alumno.Legajo}</p>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  Teléfono
                </label>
                <p className="p-2 w-3/6">{alumno.telefono}</p>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  Curso
                </label>
                <p className="p-2 w-3/6">{alumno.Curso}</p>
              </div>
              <div className="flex flex-row border border-black">
                <label className="border text-center p-2 w-2/6 border-r-black">
                  Turno
                </label>
                <p className="p-2 w-2/6">{alumno.Turno}</p>
              </div>
              {alumno.Inclusion && (
                <div className="flex flex-row border border-black">
                  <label className="border text-center p-2 w-2/6 border-r-black">
                    Inclusión
                  </label>
                  <p className="p-2 w-2/6">{alumno.InclusionTexto}</p>
                </div>
              )}
              {alumno.Ausentismo && (
                <div className="flex flex-row border border-black">
                  <label className="border text-center p-2 w-2/6 border-r-black">
                    Ausentismo:
                  </label>
                  <p className="p-2 w-3/6">{alumno.AusentismoTexto}</p>
                </div>
              )}
              {alumno.Conducta && (
                <div className="flex flex-row border border-black">
                  <label className="border text-center p-2 w-2/6 border-r-black">
                    Conducta
                  </label>
                  <p className="p-2 w-3/6">{alumno.ConductaTexto}</p>
                </div>
              )}
              {alumno.DEI && (
                <div className="flex flex-row border border-black">
                  <label className="border text-center p-2 w-2/6 border-r-black">
                    DEI
                  </label>
                  <p className="p-2 w-3/6">{alumno.DEITexto}</p>
                </div>
              )}
              {alumno.Judicial && (
                <div className="flex flex-row border border-black">
                  <label className="border text-center p-2 w-2/6 border-r-black">
                    Judicial
                  </label>
                  <p className="p-2 w-3/6">{alumno.JudicialTexto}</p>
                </div>
              )}
              {alumno.ServicioLocal && (
                <div className="flex flex-row border border-black">
                  <label className="border text-center p-2 w-2/6 border-r-black">
                    Servicio Local
                  </label>
                  <p className="p-2 w-3/6 max-w-3/6">
                    {alumno.ServicioLocalTexto}
                  </p>
                </div>
              )}
              <p className="">
                La última actualización a este usuario fue el día:
                {alumno.actualizado}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
