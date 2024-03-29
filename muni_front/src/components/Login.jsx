import React, { useEffect, useState } from "react";
import logoMunicipalidad from "../assets/sn-logo.png";
import { useNavigate } from "react-router-dom"
import  *  as loginService  from "../services/loginServices";
import { loginTest } from "../utils/sessionHandler";



const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const navigate = useNavigate();


    function navigateLogin() {
        navigate("/tramites");
    } 


    const onSubmitForm = (e) => {
        e.preventDefault();
        let jsonUserLogin = {
            email,
            password
        }
        loginService.loginUser(jsonUserLogin,loginTest,setUser)
    };

    useEffect(() => {
        if (user) {
            navigateLogin();
        }
    }, [user])
    

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    src={logoMunicipalidad}
                    alt="logo municipalidad"
                />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmitForm}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="ejemplo@ejemplo.com"
                                required
                                onChange={e => setEmail(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Contraseña
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={e => setPassword(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    No tienes Usuario? 
                    <a href="/registrar" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Registrate.</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
