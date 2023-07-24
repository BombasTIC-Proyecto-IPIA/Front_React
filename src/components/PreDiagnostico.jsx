import React, { useState, useEffect } from "react";
import ImageDrop from "./ImageDragger";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

const PreDiagnostico = () => {
    const { dni } = useParams();
    const navigate = useNavigate(); // Use the useNavigate hook here
    const [resultado, setResultado] = useState("");
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        if (resultado !== "") {
            console.log(resultado.toString());
            // Use navigate to go to the DiagnosisResult component with the necessary data
            navigate(`/diagnostico`, { state: { resultado, imageData: imageData, pacienteDNI: dni } });
        }
    }, [resultado, imageData, dni, navigate]);

    const handleFileDrop = (file) => {
        const formData = new FormData();
        formData.append("file", file);

        fetch("http://localhost:3000/utilities/executeModel", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((result) => {
                if (result.status === "OK") {
                     // Set the image data in state
                     setImageData(result.data.imagen);
                    if (result.data.resultado.trim() === "1") {
                        console.log("Hola");
                        setResultado(true);
                    } else {
                        setResultado(false);
                    }
                }
            })
            .catch((error) => {
                console.error("Error al subir el archivo:", error);
            });
    };

    return (
        <div>
            <ImageDrop onFileDrop={handleFileDrop} />
        </div>
    );
};

export default PreDiagnostico;
