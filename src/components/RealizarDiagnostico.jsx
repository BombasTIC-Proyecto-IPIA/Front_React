import React from 'react';
import ImageDrop from './ImageDragger';

const RealizarDiagnostico = () => {
    const handleFileDrop = (file) => {
        // Crear una instancia de FormData para enviar el archivo al servidor
        const formData = new FormData();
        formData.append('file', file);

        // Enviar el archivo al servidor
        fetch('http://localhost:3000/utilities/executeModel', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.text())
            .then((result) => {
                console.log(result); // Mensaje de respuesta del servidor
            })
            .catch((error) => {
                console.error('Error al subir el archivo:', error);
            });
    };




    return (
        <ImageDrop onFileDrop={handleFileDrop} />
    );
};

export default RealizarDiagnostico;


