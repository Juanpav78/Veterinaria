
const Pacientes = ({paciente, setPaciente,eliminarPaciente}) =>{

        const {nombre, propietario, email, fecha, sintomas, id} = paciente;
        return(
        <div className=" mb-3 mx-3 bg-white shadow-md rounded-xl px-5 py-10">
                <p className=" mb-3 text-gray-700 uppercase font-bold">
                                Nombre: {''}
                                <span className=" font-normal normal-case">{nombre}</span>
                </p>
                <p className=" mb-3 text-gray-700 uppercase font-bold">
                                Propietario: {''}
                                <span className=" font-normal normal-case">{propietario}</span>
                </p>
                <p className=" mb-3 text-gray-700 uppercase font-bold">
                                Email: {''}
                                <span className=" font-normal normal-case">{email}</span>
                </p>
                <p className=" mb-3 text-gray-700 uppercase font-bold">
                                Fecha de Ingreso: {''}
                                <span className=" font-normal normal-case">{fecha}</span>
                </p>
                <p className=" mb-3 text-gray-700 uppercase font-bold">
                                Sintomas: {''}
                                <span className=" font-normal normal-case">
                                {sintomas}
                                        </span>
                </p>

                <div className="flex justify-between mt-10">
                        <button onClick={() => setPaciente(paciente)} type="button" className=" mr-3 py-2 px-10 bg-indigo-600 rounded-md text-white font-bold uppercase">Editar</button>
                        <button type="button" className="py-2 px-10 bg-red-600 rounded-md text-white font-bold uppercase" onClick={() => eliminarPaciente(id)} >Eliminar</button>
                </div>
        </div>

        )
}

export default Pacientes;