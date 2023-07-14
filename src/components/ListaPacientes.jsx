import React, { useEffect, useState } from "react";

const MenuPacientes = (props) => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchDataPaciente = async () => {
      await fetch("http://localhost:3000/api/paciente")
        .then((response) => response.json())
        .then((data) => setPacientes(data))
        .catch((error) => console.error(error));


      fetch('http://localhost:3000/api/diagnostico')
        .then(response => response.json())
        .then(diagnosticos => {
          setPacientes(prevPacientes => {
            return prevPacientes.map(paciente => {
              const diagnostico = diagnosticos.find(d => d.PacienteDni === paciente.dni);
              return {
                ...paciente,
                diagnostico: diagnostico ? 'Hecho' : 'Pendiente'
              };
            });
          });
        })
        .catch(error => console.error(error));
    }
    fetchDataPaciente();

  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-xl"
                  >
                    DNI
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-xl "
                  >
                    Nombre y apellido
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-xl "
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
