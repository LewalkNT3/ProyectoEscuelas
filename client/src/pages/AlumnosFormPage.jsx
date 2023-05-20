import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  createAlumno,
  deleteAlumnos,
  updateAlumnos,
  getAlumno,
} from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function AlumnosFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      console.log(data);
      await updateAlumnos(params.id, data);
      toast.success("Alumno Actualizado");
    } else {
      await createAlumno(data);
      toast.success("Alumno Creado");
    }
    navigate("/");
  });

  useEffect(() => {
    async function loadAlumno() {
      if (params.id) {
        const res = await getAlumno(params.id);
        console.log(res);
        setValue("Escuela", res.data.Escuela);
        setValue("Fullname", res.data.Fullname);
        setValue("FechaDeNacimiento", res.data.FechaDeNacimiento);
        setValue("DNI", res.data.DNI);
        setValue("Legajo", res.data.Legajo);
        setValue("telefono", res.data.telefono);
        setValue("Curso", res.data.Curso);
        setValue("ServicioLocal", res.data.ServicioLocal);
        setValue("ServicioLocalTexto", res.data.ServicioLocalTexto);
        setValue("Ausentismo", res.data.Ausentismo);
        setValue("AusentismoTexto", res.data.AusentismoTexto);
        setValue("DEI", res.data.DEI);
        setValue("DEITexto", res.data.DEITexto);
        setValue("Inclusion", res.data.Inclusion);
        setValue("InclusionTexto", res.data.InclusionTexto);
        setValue("Judicial", res.data.Judicial);
        setValue("JudicialTexto", res.data.JudicialTexto);
        setValue("Conducta", res.data.Conducta);
        setValue("ConductaTexto", res.data.ConductaTexto);
        setValue("Turno", res.data.Turno);
      }
    }
    loadAlumno();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre Completo"
          {...register("Fullname", { required: true })}
        ></input>
        {errors.Fullname && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Escuela"
          {...register("Escuela", { required: true })}
        ></input>
        {errors.Escuela && <span>Este campo es requerido</span>}

        <input
          type="date"
          {...register("FechaDeNacimiento", { required: true })}
        ></input>
        {errors.FechaDeNacimiento && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="DNI"
          {...register("DNI", { required: true })}
        ></input>
        {errors.DNI && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="Legajo"
          {...register("Legajo", { required: true })}
        ></input>
        {errors.Legajo && <span>Este campo es requerido</span>}

        <input
          type="tel"
          placeholder="Telefono"
          {...register("telefono", { required: true })}
        ></input>
        {errors.telefono && <span>El numero Enviado no es valido</span>}

        <input
          type="text"
          placeholder="Curso"
          {...register("Curso", { required: true })}
        ></input>
        {errors.Curso && <span>Este campo es requerido</span>}

        <input
          type="checkbox"
          placeholder="ServicioLocal"
          {...register("ServicioLocal", { required: false })}
        ></input>
        {errors.ServicioLocal && <span>Este campo es requerido</span>}

        <textarea
          placeholder="ServicioLocalTexto"
          {...register("ServicioLocalTexto", { required: false })}
        ></textarea>
        {errors.ServicioLocalTexto && <span>Este campo es requerido</span>}

        <input
          type="checkbox"
          placeholder="Ausentismo"
          {...register("Ausentismo", { required: false })}
        ></input>
        {errors.Ausentismo && <span>Este campo es requerido</span>}

        <textarea
          placeholder="AusentismoTexto"
          {...register("AusentismoTexto", { required: false })}
        ></textarea>
        {errors.AusentismoTexto && <span>Este campo es requerido</span>}

        <input
          type="checkbox"
          placeholder="DEI"
          {...register("DEI", { required: false })}
        ></input>
        {errors.DEI && <span>Este campo es requerido</span>}

        <textarea
          placeholder="DEITexto"
          {...register("DEITexto", { required: false })}
        ></textarea>
        {errors.DEITexto && <span>Este campo es requerido</span>}

        <input
          type="checkbox"
          placeholder="Inclusion"
          {...register("Inclusion", { required: false })}
        ></input>
        {errors.Inclusion && <span>Este campo es requerido</span>}

        <textarea
          placeholder="InclusionTexto"
          {...register("InclusionTexto", { required: false })}
        ></textarea>
        {errors.InclusionTexto && <span>Este campo es requerido</span>}

        <input
          type="checkbox"
          placeholder="Judicial"
          {...register("Judicial", { required: false })}
        ></input>
        {errors.Judicial && <span>Este campo es requerido</span>}

        <textarea
          placeholder="JudicialTexto"
          {...register("JudicialTexto", { required: false })}
        ></textarea>
        {errors.JudicialTexto && <span>Este campo es requerido</span>}

        <input
          type="checkbox"
          placeholder="Conducta"
          {...register("Conducta", { required: false })}
        ></input>
        {errors.Conducta && <span>Este campo es requerido</span>}

        <textarea
          placeholder="ConductaTexto"
          {...register("ConductaTexto", { required: false })}
        ></textarea>
        {errors.ConductaTexto && <span>Este campo es requerido</span>}

        <select
          placeholder="Selecciona el turno"
          {...register("Turno", { required: false })}
        >
          <option>Tm</option>
          <option>Tt</option>
          <option>Tn</option>
        </select>
        {errors.Turno && <span>Este campo es requerido</span>}

        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("Estas seguro?");
            if (accepted) {
              await deleteAlumnos(params.id);
              navigate("/");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
