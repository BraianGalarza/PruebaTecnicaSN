import React, { useState } from "react";
import logoMunicipalidad from "../assets/sn-logo.png";
import  *  as registerService  from "../services/registerService";
import { useNavigate } from "react-router-dom";


const Register = () => {


    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [date, setDate] = useState('')
    const [dni, setDni] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    function navigateLogin() {
        navigate("/login");
    } 

    const onSubmitForm = (e) => {
        e.preventDefault();
        let jsonUser = {
            name,
            lastName,
            date,
            dni,
            email,
            password
        }
        registerService.registerUser(jsonUser, navigateLogin)
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    src={logoMunicipalidad}
                    alt="logo municipalidad"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Registrar Nuevo Usuario
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmitForm}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                autoComplete="name"
                                required
                                onChange={e => setName(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                Apellido
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="lastName"
                                name="lastName"
                                type="lastName"
                                autoComplete="current-lastName"
                                required
                                onChange={e => setLastName(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="date" className="block text-sm font-medium leading-2 text-gray-900">
                                Fecha de Nacimiento
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="date"
                                name="date"
                                type="date"
                                autoComplete="current-date"
                                required
                                onChange={e => setDate(e.target.value)}
                                className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                DNI
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="dni"
                                name="dni"
                                type="number"
                                autoComplete="current-dni"
                                required
                                onChange={e => setDni(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
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
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
