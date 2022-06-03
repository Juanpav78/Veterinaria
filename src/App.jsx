import {useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  const eliminarPaciente = (id) => {
    const pacientesActu = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActu);
  } 
  useEffect(() => {
    const revisLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    revisLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes));
  }, [pacientes])
  

  return (
    <div className=" container mx-auto mt-7">

      <Header/>

      <div className="md:flex mt-12">
      <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      
      
      />
      </div>
      
      
    </div>
  )
}

export default App
