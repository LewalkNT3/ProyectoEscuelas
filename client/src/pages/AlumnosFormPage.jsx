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
import BackButton from "../components/BackArrow";

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
    try {
      if (params.id) {
        await updateAlumnos(params.id, data);
        toast.success("Alumno Actualizado");
      } else {
        await createAlumno(data);
        toast.success("Alumno Creado");
      }
      navigate("/");
    } catch (error) {
      toast.error(
        "Los datos al registrar el alumno son incorrectos, revisa las casillas y reintenta"
      );
    }
  });

  useEffect(() => {
    async function loadAlumno() {
      if (params.id) {
        const res = await getAlumno(params.id);
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
    <div className="min-h-screen mt-3 pt-3 mb-3 flex justify-center items-center flex-col">
      <div className="p-5 sm:p-10 bg-gray-100 box box-border shadow-2xl flex justify-center items-center flex-col border border-1">
        <div className="flex flex-row">
          <div className="m-3">
            <BackButton />
          </div>
          <h1 className="text-2xl sm:text-5xl">Registra los estudiantes</h1>
        </div>
        <hr />
        <form className="w-full sm:w-96 mt-5 sm:mt-10" onSubmit={onSubmit}>
          <div className="mt-3">
            {errors.Fullname && <span>Este campo es requerido*</span>}
            <input
              className="w-full mb-3 p-2"
              type="text"
              placeholder="Nombre Completo"
              {...register("Fullname", { required: true })}
            ></input>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {errors.DNI && <span className=" ">Este campo es requerido*</span>}
            <input
              className="w-full mb-3 p-2 outline-none"
              type="number"
              placeholder="DNI"
              {...register("DNI", { required: true })}
            ></input>

            {errors.Legajo && <span>Este campo es requerido*</span>}
            <input
              className="w-full mb-3 p-2 outline-none"
              type="number"
              placeholder="Legajo"
              {...register("Legajo", { required: true })}
            ></input>
          </div>
          <div className="">
            {errors.telefono && <span>El número enviado no es válido*</span>}
            <input
              className="w-full mb-3 p-2 outline-none"
              type="tel"
              placeholder="Teléfono"
              {...register("telefono", { required: true })}
            ></input>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select
              className="w-full mb-3 p-2 outline-none"
              type="text"
              placeholder="Seleccione una Escuela"
              {...register("Escuela", { required: true })}
            >
              <option>ES N°37</option>
              <option>ES N°46</option>
            </select>
            {errors.Escuela && <span>Este campo es requerido*</span>}
            <input
              className="w-full mb-3 p-2 outline-none"
              type="date"
              {...register("FechaDeNacimiento", { required: true })}
            ></input>
            {errors.FechaDeNacimiento && <span>Este campo es requerido</span>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select
              className="w-full mb-3 p-2 outline-none"
              type="text"
              placeholder="Curso"
              {...register("Curso", { required: true })}
            >
              <option>1ro 1ra</option>
              <option>1ro 2da</option>
              <option>1ro 3ra</option>
              <option>1ro 4ta</option>
              <option>2do 1ra</option>
              <option>2do 2da</option>
              <option>2do 3ra</option>
              <option>2do 4ta</option>
              <option>3ro 1ra</option>
              <option>3ro 2da</option>
              <option>3ro 3ra</option>
              <option>3to 4ta</option>
              <option>4to ArLi</option>
              <option>4to Com</option>
              <option>5to ArLi</option>
              <option>5to Com</option>
              <option>6to ArLi</option>
              <option>6to Com</option>
            </select>
            {errors.Curso && <span>Este campo es requerido</span>}

            <select
              className="w-full mb-3 p-2 outline-none"
              placeholder="Selecciona el turno"
              {...register("Turno", { required: false })}
            >
              <option>Tm</option>
              <option>Tt</option>
              <option>Tn</option>
            </select>
          </div>

          <div className="flex gap-4">
            <input
              className=""
              type="checkbox"
              placeholder="ServicioLocal"
              {...register("ServicioLocal", { required: false })}
            ></input>
            {errors.ServicioLocal && <span>Este campo es requerido</span>}
            <textarea
              className="w-full mb-3 p-3 outline-none"
              placeholder="ServicioLocalTexto"
              {...register("ServicioLocalTexto", { required: false })}
            ></textarea>
            {errors.ServicioLocalTexto && <span>Este campo es requerido</span>}
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              placeholder="Ausentismo"
              {...register("Ausentismo", { required: false })}
            ></input>
            {errors.Ausentismo && <span>Este campo es requerido</span>}
            <textarea
              className="w-full mb-3 p-3 outline-none"
              placeholder="AusentismoTexto"
              {...register("AusentismoTexto", { required: false })}
            ></textarea>
            {errors.AusentismoTexto && <span>Este campo es requerido</span>}
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              placeholder="DEI"
              {...register("DEI", { required: false })}
            ></input>
            {errors.DEI && <span>Este campo es requerido</span>}

            <textarea
              placeholder="DEITexto"
              className="w-full mb-3 p-3 outline-none"
              {...register("DEITexto", { required: false })}
            ></textarea>
            {errors.DEITexto && <span>Este campo es requerido</span>}
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              placeholder="Inclusion"
              {...register("Inclusion", { required: false })}
            ></input>
            {errors.Inclusion && <span>Este campo es requerido</span>}

            <textarea
              className="w-full mb-3 p-3 outline-none"
              placeholder="InclusionTexto"
              {...register("InclusionTexto", { required: false })}
            ></textarea>
            {errors.InclusionTexto && <span>Este campo es requerido</span>}
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              placeholder="Judicial"
              {...register("Judicial", { required: false })}
            ></input>
            {errors.Judicial && <span>Este campo es requerido</span>}

            <textarea
              className="w-full mb-3 p-3 outline-none"
              placeholder="JudicialTexto"
              {...register("JudicialTexto", { required: false })}
            ></textarea>
            {errors.JudicialTexto && <span>Este campo es requerido</span>}
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              placeholder="Otros"
              {...register("Conducta", { required: false })}
            ></input>
            <textarea
              placeholder="Otros"
              {...register("ConductaTexto", { required: false })}
              className="w-full mb-3 p-3 outline-none"
            ></textarea>
          </div>
          <button className="flex justify-center items-center w-full h-[40px] mb-3 border border-1 border-black transition duration-200 ease bg-transparent hover:bg-custom-green">
            Guardar
          </button>
        </form>
        {params.id && (
          <button
            onClick={async () => {
              await deleteAlumnos(params.id);
              navigate("/");
              toast.success("Alumno eliminado");
            }}
            className="flex justify-center items-center w-full h-[40px] mb-3 border border-1 border-red-500 transition duration-200 ease bg-transparent hover:bg-red-500 text-red-500 hover:text-white"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}
