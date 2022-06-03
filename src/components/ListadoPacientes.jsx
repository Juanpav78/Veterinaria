import Pacientes from "./Pacientes";
import { useEffect } from "react";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) =>{


        return(
                <div className="md:w-1/2 lg:w-3/5 ">
                        {pacientes && pacientes.length ? (
                                <>
                                <h2 className="font-black text-3xl text-center mt-4 md:mt-0">Listado Pacientes</h2>
                                <p className=" text-lg mt-3 text-center mb-3">
                                        Administra tus {''}
                                        <span className=" text-indigo-600 font-bold ">
                                                Pacientes y Citas</span>
                                </p>

                                <div  className="h-[640px] md:overflow-y-scroll">
                                { pacientes.map( (paciente) => (
                                        <Pacientes  
                                        key={paciente.id}                 
                                        paciente={paciente}
                                        setPaciente={setPaciente}
                                        eliminarPaciente={eliminarPaciente}
                                        />
                                )  
                                )}
                                </div>
                                </>
                        ) : (
                                <>
                                <h2 className="font-black text-3xl text-center mt-4 md:mt-0">No hay pacientes</h2>
                                <p className=" text-lg mt-3 text-center mb-3">
                                        Comienza agregando pacientes {''}
                                        <span className=" text-indigo-600 font-bold ">
                                                y apareceren acá</span>
                                </p>
                                </>
                        )}
                

                </div>
        )
}

export default ListadoPacientes;