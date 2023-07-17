import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDrop = ({ onFileDrop }) => {
    const handleDrop = useCallback(
        (acceptedFiles) => {
            // Verificar si se ha soltado algún archivo
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                // Verificar que el archivo sea de tipo Excel
                if (file.type === 'image/tiff' || file.name.toLowerCase().endsWith('.tif') || file.type === 'image/jpeg' || file.name.toLowerCase().endsWith('.jpg')) {
                    onFileDrop(file);
                } else {
                    alert('Por favor, selecciona un archivo de Excel válido.');
                }
            }
        },
        [onFileDrop]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Suelte aquí la imagen a diagnosticar...</p>
            ) : (
                <p>Arrastre la imagen a diagnosticar aquí, o haga click para seleccionarla.</p>
            )}
        </div>
    );
};

export default ImageDrop;
