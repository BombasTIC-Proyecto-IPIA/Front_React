import React from "react";
import NavCerrar from "./NavCerrar";
const RealizarDiagnostico = () => {

    return (

        <div>
            <NavCerrar />
            <div>
                <h1 className="text-center text-4xl"> <br />Diagnostico</h1>
            </div>
            <div className="container grid md:grid-cols-2">

                <div className='mx-auto col-span-1'>
                    <img
                        src="https://via.placeholder.com/256"
                        alt=""
                        className="mr-4"
                    />
                </div>

                <div className='mx-auto col-span-1'>
                    <form className="flex flex-col items-center w-80">
                        <textarea
                            name="diagnosis"
                            id="diagnosis"
                            cols="30"
                            rows="10"
                            className="w-full b1 px-3 py-2 border border-gray-300 rounded-md resize-vertical "
                            placeholder="Escribe aquí el diagnóstico..."
                        ></textarea>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                            Realizar Diagnóstico
                        </button>
                        <button className="mt-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md">
                            Cancelar
                        </button>
                    </form>
                </div>


            </div>
        </div>

    );

};

export default RealizarDiagnostico;

