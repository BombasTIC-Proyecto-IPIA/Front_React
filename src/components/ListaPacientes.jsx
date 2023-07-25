import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const MenuPacientes = (props) => {
  const user = useSelector(state => state.user);
  const [pacientes, setPacientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataPaciente = async () => {
      setIsLoading(true); // Set loading state to true before making the API call

      try {
        const responsePaciente = await fetch(`http://192.168.233.182:3000/api/paciente/d/${user.dni}`);
        const dataPaciente = await responsePaciente.json();

        const responseDiagnosticos = await fetch('http://192.168.233.182:3000/api/diagnostico');
        const diagnosticos = await responseDiagnosticos.json();

        const updatedPacientes = dataPaciente.map(paciente => {
          const diagnostico = diagnosticos.find(d => d.PacienteDni === paciente.dni);
          return {
            ...paciente,
            diagnostico: diagnostico ? 'Hecho' : 'Pendiente'
          };
        });

        setPacientes(updatedPacientes);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false after API calls are completed
      }
    };

    fetchDataPaciente();
  }, [user.dni]);

  const handleRowClick = (dni, diagnostico) => {
    if (diagnostico === 'Hecho') {
      // Redirect to the "Diagnostico" component with the pacienteDNI as state
      navigate(`/diagnostico`, { state: { pacienteDNI: dni } });
    } else {
      // Redirect to the PreDiagnostico component with the pacienteDNI as a parameter
      navigate(`/pre-diagnostico/${dni}`);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-blue-300 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-xl"
                  >
                    DNI
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-xl"
                  >
                    Nombre y apellido
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-xl"
                  >
                    Diagnostico previo
                  </th>
                </tr>
              </thead>
              <tbody>
                {pacientes.map((paciente) => (
                  <tr
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    key={paciente.dni}
                    onClick={() => handleRowClick(paciente.dni, paciente.diagnostico)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {paciente.dni}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {paciente.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {paciente.diagnostico}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPacientes;
