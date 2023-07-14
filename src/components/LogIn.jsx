import React, { useState } from "react";
import Select from "react-select";
import cssLogin from "../styles/login.css";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const options = [
        { label: "Doctor", value: "D" },
        { label: "Paciente", value: "P" },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tipoUsuario);
    };

    return (
        <div className="">
            <div>

                <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 w-1/2 items-center mt-10  mx-auto   ">
                    <form onSubmit={handleSubmit}>
                        <div id="Registro" className="">
                            <h1 className="text-center text-5xl">Inicio sesión</h1> <br />
                            <label className="block text-black uppercase font-bold">
                                Tipo de usuario
                            </label>
                            <Select
                                id="dropdown-menu"
                                className=" mb-5 border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md"
                                placeholder={"e"}
                                options={options}
                                onChange={(e) => setTipoUsuario(e.value)}

                            />
                        </div>

                        <div id="Registro" className="">
                            <label className="block text-black uppercase font-bold">
                                Correo Electronico
                            </label>
                            <input
                                id="Correo_electonico"
                                type="email"
                                onChange={(ev) => setEmail(ev.target.value)}
                                className=" mb-5 border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md"
                                placeholder="Correo Electronico"
                            ></input>
                        </div>

                        <div className="">
                            <label className="block text-black uppercase font-bold">
                                Contraseña
                            </label>
                            <input
                                id="Password"
                                type="password"
                                onChange={(ev) => setPass(ev.target.value)}
                                className=" mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                placeholder="Contraseña"
                            ></input>
                        </div>

                        <input
                            type="submit"
                            onSubmit={handleSubmit}
                            className=" py-2 px-2 bg-blue-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
                        />
                    </form>

                </div>
            </div>

        </div>
    );
};


export default Login;
