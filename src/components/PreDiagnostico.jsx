import React, { useState } from "react";
import ImageDrop from "./ImageDragger";
import { useParams } from "react-router-dom";

const PreDiagnostico = () => {
    const { dni } = useParams();
    const [resultado, setResultado] = useState("");
    const [convertedImageBlob, setConvertedImageBlob] = useState(null);

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
                    if (result.data.resultado.trim() === "1") {
                        setResultado(true);
                    } else {
                        setResultado(false);
                    }

                    // Convert the base64 string back to an image blob
                    const imageBlob = b64toBlob(result.data.imagen, 'image/png');
                    setConvertedImageBlob(imageBlob);
                }
            })
            .catch((error) => {
                console.error("Error al subir el archivo:", error);
            });
    };

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

    return (
        <div>
            <ImageDrop onFileDrop={handleFileDrop} />
            {convertedImageBlob && (
                <div>
                    <h2>Resultado</h2>
                    {resultado ? <p>Resultado positivo</p> : <p>Resultado negativo</p>}
                    <h2>Imagen Convertida</h2>
                    <img
                        src={URL.createObjectURL(convertedImageBlob)}
                        alt="Imagen Convertida"
                    />
                </div>
            )}
        </div>
    );
};

export default PreDiagnostico;
