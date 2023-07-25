import React, { useState, useEffect } from "react";
import NavCerrar from "./NavCerrar";
import { useLocation, useNavigate } from "react-router-dom";

const RealizarDiagnostico = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { resultado: propResultado, imageData, pacienteDNI } = location.state;

    function b64toBlob(base64, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(base64);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    // State to track if data is loaded
    const [dataLoaded, setDataLoaded] = useState(false);

    // State to hold the diagnosis entered by the doctor
    const [diagnosticoDoctor, setDiagnosticoDoctor] = useState("");

    // State to hold the resultado
    const [resultado, setResultado] = useState(null);

    // State to hold the image blob
    const [imageBlob, setImageBlob] = useState(null);

    useEffect(() => {
        if (propResultado == null) {
            // Make API call to fetch the resultado and imageData
            fetch(`http://172.20.10.2:3000/api/diagnostico/${pacienteDNI}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    // Assuming the API response provides the resultado and imageData
                    setResultado(data.resultado_Prediccion);
                    setDataLoaded(true);
                    setDiagnosticoDoctor(data.resultados)
                    if (data.imagen) {
                        const uint8Array = new Uint8Array(data.imagen.data);
                        // Use the Uint8Array directly to create the imageBlob
                        const imageBlob = new Blob([uint8Array], { type: "image/png" });
                        setImageBlob(imageBlob);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching resultado from API:", error);
                });
        } else {
            // If resultado is already provided, set it in the component state
            setResultado(propResultado);
            setDataLoaded(true);

            // If imageData is available, set the imageBlob as well
            if (imageData) {
                const imageBlob = b64toBlob(imageData, 'image/png');
                setImageBlob(imageBlob);
            }
        }
    }, [propResultado, imageData, pacienteDNI]);

    const handleDiagnosisChange = (event) => {
        setDiagnosticoDoctor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();


        // Check if there is an existing diagnosis
        if (propResultado == null) {
            formData.append("resultados", diagnosticoDoctor);

            const requestOptions = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "PATCH", // Use PATCH method to update the existing diagnosis
                body: JSON.stringify({
                    resultados: diagnosticoDoctor
                }),
            };

            console.log(formData.entries())
            fetch(`http://localhost:3000/api/diagnostico/${pacienteDNI}`, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    alert("Actualizado correctamente");
                })
                .catch((error) => {
                    console.error("Error al actualizar el diagnóstico:", error);
                });
        } else {
            formData.append("resultados", diagnosticoDoctor);
            formData.append("imagen", imageBlob); // Use the Blob directly
            formData.append("PacienteDni", pacienteDNI);
            formData.append("resultado_Prediccion", resultado);
            // If no existing diagnosis, use the POST method to create a new one
            const requestOptions = {
                method: "POST",
                body: formData,
            };

            fetch("http://192.168.233.182:3000/api/diagnostico", requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((result) => {
                    if (result.status === "OK") {
                        // Handle the response if needed
                    }
                })
                .catch((error) => {
                    console.error("Error al subir el archivo:", error);
                });
        }


        const handleCancel = () => {
            // Redirigir a http://192.168.233.182:5173/doctor
            navigate(`/doctor`);
        };

        if (!dataLoaded) {
            // Render a loading state or a placeholder while waiting for the data
            return <div>Loading...</div>;
        }

        return (
            <div>
                <NavCerrar />
                <div>
                    <h1 className="text-center text-4xl mb-9 font-bold "> <br />Diagnostico</h1>
                    {resultado ? <p className=" bg-white shadow-md  rounded-lg py-5 px-5 mb-89 w-1/5 items-center mt-10  mx-auto  mb-100 text-red-500  text-center font-bold text-2xl">Positive Result</p> : <p className="bg-white shadow-md  rounded-lg py-5 px-5 mb-89 w-1/5 items-center mt-10  mx-auto  mb-100 text-green-500  text-center font-bold text-2xl">Negative Result</p>}
                </div>
                <div className="container grid md:grid-cols-2">
                    <div className='mx-auto col-span-1'>
                        {imageBlob && (
                            <img
                                src={URL.createObjectURL(imageBlob)}
                                alt=""
                                className="mr-4 rounded-md"
                            />
                        )}
                    </div>

                    <div className='mx-auto col-span-1'>
                        <form className="flex flex-col items-center w-80  " onSubmit={handleSubmit}>
                            <textarea
                                name="diagnosis"
                                id="diagnosis"
                                cols="30"
                                rows="10"
                                value={diagnosticoDoctor}
                                onChange={handleDiagnosisChange}
                                className="w-full b1 px-3 py-2 border border-gray-300 rounded-md resize-vertical "
                                placeholder="Escribe aquí el diagnóstico..."
                            ></textarea>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                                Realizar Diagnóstico
                            </button>
                            <button className="mt-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md" onClick={handleCancel}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};
export default RealizarDiagnostico;
