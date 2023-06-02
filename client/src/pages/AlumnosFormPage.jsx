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
import "../styles/AlumnosFormPage.css";

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
      await updateAlumnos(params.id, data);
      toast.success("Alumno Actualizado");
    } else {
      await createAlumno(data);
      toast.success("Alumno Creado");
    }
    navigate("/homepage");
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
    <div className="min-h-screen mt-3 pt-3 mb-3 flex justify-center items-center flex-col">
      <div className="p-28 bg-[#f4f4f4] box box-border shadow-2xl flex justify-center items-center flex-col">
        <div className="titulo-container">
          <h1 className="text-5xl mb-10">Registra los alumnos</h1>
        </div>
        <hr />
        <form className="w-96 justify-center items-center" onSubmit={onSubmit}>
          <div className="mt-3">
            {errors.Fullname && <span>Este campo es requerido*</span>}
            <input
              className="w-full mb-5 p-2 outline-none"
              type="text"
              placeholder="Nombre Completo"
              {...register("Fullname", { required: true })}
            ></input>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {errors.DNI && <span className=" ">Este campo es requerido*</span>}
            <input
              className="w-full mb-5 p-2 outline-none"
              type="number"
              placeholder="DNI"
              {...register("DNI", { required: true })}
            ></input>

            {errors.Legajo && <span>Este campo es requerido*</span>}
            <input
              className="w-full mb-5 p-2 outline-none"
              type="number"
              placeholder="Legajo"
              {...register("Legajo", { required: true })}
            ></input>
          </div>
          <div className="">
            {errors.telefono && <span>El numero Enviado no es valido*</span>}
            <input
              className="w-full mb-5 p-2 outline-none"
              type="tel"
              placeholder="Telefono"
              {...register("telefono", { required: true })}
            ></input>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <select
              className="w-full mb-5 p-2 outline-none"
              type="text"
              placeholder="Seleccione una Escuela"
              {...register("Escuela", { required: true })}
            >
              <option>ES N°37</option>
              <option>ES N°46</option>
            </select>
            {errors.Escuela && <span>Este campo es requerido*</span>}
            <input
              className="w-full mb-5 p-2 outline-none"
              type="date"
              {...register("FechaDeNacimiento", { required: true })}
            ></input>
            {errors.FechaDeNacimiento && <span>Este campo es requerido</span>}
          </div>
          <div className="grid grid-cols-2 gap-5">
            <select
              className="w-full mb-5 p-2 outline-none"
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
              className="w-full mb-5 p-2 outline-none"
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
              className="w-full mb-5 p-5 outline-none"
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
              className="w-full mb-5 p-5 outline-none"
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
              className="w-full mb-5 p-5 outline-none"
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
              className="w-full mb-5 p-5 outline-none"
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
              className="w-full mb-5 p-5 outline-none"
              placeholder="JudicialTexto"
              {...register("JudicialTexto", { required: false })}
            ></textarea>
            {errors.JudicialTexto && <span>Este campo es requerido</span>}
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              placeholder="Conducta"
              {...register("Conducta", { required: false })}
            ></input>
            <textarea
              placeholder="ConductaTexto"
              {...register("ConductaTexto", { required: false })}
              className="w-full mb-5 p-5 outline-none"
            ></textarea>
          </div>
          <button className="flex justify-center items-center w-full h-[40px] mb-3 border border-1 border-black transition duration-200 ease bg-transparent hover:bg-custom-green">
            Guardar
          </button>
        </form>
        {params.id && (
          <button
            className="flex justify-center items-center w-[100px] p-2 mb-3 border border-1 border-black transition duration-200 ease bg-red-600 hover:bg-red-700"
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
    </div>
  );
}
