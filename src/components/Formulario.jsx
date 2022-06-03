import {useState, useEffect} from 'react';
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) =>{

        const [nombre, setNombre] = useState('');
        const [propietario, setPropietario] = useState('');
        const [email, setEmail] = useState('');
        const [fecha, setFecha] = useState('');
        const [sintomas, setSintomas] = useState('');

        const generateID = () => {
                const random = Math.random().toString(36).substr(2);
                const date = Date.now().toString(36);
                return date + random;
        }

        const [error, setError] = useState(false);

        useEffect(() => {
                if (Object.keys(paciente).length > 0) {
                setNombre(paciente.nombre)
                setPropietario(paciente.propietario)
                setEmail(paciente.email)
                setFecha(paciente.fecha)
                setSintomas(paciente.sintomas)
                }
        }, [paciente]);



        const handleSubmit = (e) => {
                e.preventDefault();

                if ([nombre, propietario, email, fecha, sintomas].includes('')){
                        setError(true);
                        return
                }

                setError(false);

                const objetoPacientes ={
                        nombre,
                        propietario,
                        email,
                        fecha,
                        sintomas,
                        
                }

                if (paciente.id){
                        objetoPacientes.id= paciente.id

                        const pacientesActu = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState )
                        setPacientes( pacientesActu);
                        setPaciente( {});
                } else{
                        objetoPacientes.id= generateID()
                        setPacientes([...pacientes, objetoPacientes]);
                }



                
                setNombre('');
                setPropietario('');
                setEmail('');
                setFecha('');
                setSintomas('');
        }

        return(
                
                <div className="md:w-1/2 mx-3 lg:w-2/5">
                <h2 className=" font-black text-3xl text-center ">Seguimiento Pacientes:</h2>
                
                <p className=" text-lg mt-3 text-center mb-3">
                        Añade Pacientes y {''}
                        <span className=" text-indigo-600 font-bold ">Administralos</span>
                </p>

                <form onSubmit={handleSubmit}
                className=" bg-white shadow-md rounded-lg px-5 py-10">
                        {error &&  <Error
                        mensaje='¡Todos los campos son obligarios!'
                        
                        />}
                        <div className=" mb-5">
                                <label htmlFor="mascota" className=" block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
                                <input 
                                value={nombre}
                                onChange = {(e) => setNombre(e.target.value)}
                                id="mascota"
                                type="text"
                                placeholder="Nombre de la Mascota" 
                                className=" outline-indigo-600 border-2  w-full p-2 mt-2  placeholder-gray-400  rounded-md"
                                        
                                />
                        </div>
                        <div className=" mb-5">
                                <label htmlFor="propietario" className=" block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                                <input 
                                value={propietario}
                                onChange = {(e) => setPropietario(e.target.value)}
                                id="propietario"
                                type="text"
                                placeholder="Nombre del Propietario" 
                                className="outline-indigo-600 border-2  w-full p-2 mt-2  placeholder-gray-400  rounded-md"
                                        
                                />
                        </div>
                        <div className=" mb-5">
                                
                                <label htmlFor="email" className=" block text-gray-700 uppercase font-bold">Email</label>
                                <input 
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                                id="email"
                                type="text"
                                placeholder="Correo electronico" 
                                className="outline-indigo-600 border-2  w-full p-2 mt-2  placeholder-gray-400  rounded-md"
                                        
                                />
                        </div>
                        <div className=" mb-5">
                                <label htmlFor="Alta" className=" block text-gray-700 uppercase font-bold">Fecha de Ingreso</label>
                                <input 
                                value={fecha}
                                onChange = {(e) => setFecha(e.target.value)}
                                id="Alta"
                                type="date"
                                className=" outline-indigo-600 border-2  w-full p-2 mt-2  placeholder-gray-400  rounded-md"
                                        
                                />
                        </div>
                        <div className=" mb-5">
                                <label htmlFor="sintomas" className=" block text-gray-700 uppercase font-bold">Sintomas</label>
                                <textarea 
                                 value={sintomas}
                                 onChange = {(e) => setSintomas(e.target.value)}
                                 id="sintomas"
                                 placeholder="Describe los sintomas"
                                 className=" outline-indigo-600 border-2 w-full p-2 mt-2 placeholder-gray-400"
                                 ></textarea>
                        </div>

                        <input type="submit" 
                        className=" bg-indigo-600 w-full text-white font-bold p-3 uppercase
                                   hover:bg-indigo-800 hover:cursor-pointer transition-all"
                        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                        />
                </form>

                </div>
        )
}

export default Formulario;