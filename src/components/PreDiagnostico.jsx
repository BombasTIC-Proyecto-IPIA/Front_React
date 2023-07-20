import React from 'react';
import ImageDrop from './ImageDragger';

const PreDiagnostico = () => {
    const handleFileDrop = async (file) => {
        try {
            const folderHandle = await window.showDirectoryPicker();
            const directoryHandle = await folderHandle.getDirectoryHandle('imagenesDiagnostico', { create: true });
            const fileHandle = await directoryHandle.getFileHandle(file.name, { create: true });
            const writable = await fileHandle.createWritable();
            await writable.write(file);
            await writable.close();
            console.log('File saved successfully!');
        } catch (error) {
            console.error('Error saving the file:', error);
        }
    };




    return (
        <ImageDrop onFileDrop={handleFileDrop} />
    );
};

export default PreDiagnostico;


