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
        <div className="justify-center">
            <h2>Login</h2>
            <form className="columns-1" onSubmit={handleSubmit}>
                <label className="break-after-column" htmlFor="tipoPaciente">tipo Paciente</label><br />
                <Select
                    id="dropdown-menu"
                    placeholder={"e"}
                    options={options}
                    onChange={(e) => setTipoUsuario(e.value)}
                // getOptionValue={(option) => option.value}
                // getOptionLabel={(option) => option.label}
                /><br />
                <label className="break-after-column" htmlFor="email">email</label><br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com" id="email" name="email" /><br />
                <label htmlFor="password">password</label><br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br />
                <button type="submit">Log In</button><br />
            </form>
            <button className="" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
