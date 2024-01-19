import React, { useEffect, useState } from "react";
import tramiteIcon from "../assets/tramitesIcons/carnet-de-conducir.png";
import *  as tramiteService from "../services/tramitesService";
import { useNavigate } from "react-router-dom";
import { getItems } from "../utils/sessionHandler";


const FormTramite = () => {

    const [domicilio, setDomicilio] = useState('')
    const [vista, setVista] = useState(false)
    const [vistaDetalle, setVistaDetalle] = useState('')
    const [grupoSanguineo, setGrupoSanguineo] = useState('')
    const [examenPsicofisico, setExamenPsicofisico] = useState(false)
    const [imagenLicencia, setImagenLicencia] = useState('')
    const userActual = getItems()


    const onSubmitForm = (e) => {
        e.preventDefault();
        const formTramite = new FormData()

        formTramite.append('dni', userActual.dni);
        formTramite.append('idTramite', 1);
        formTramite.append('nombreTramite', "Renovar Carnet de Conducir");
        formTramite.append('domicilio', domicilio);
        formTramite.append('vista', vista);
        formTramite.append('vistaDetalle', vistaDetalle);
        formTramite.append('grupoSanguineo', grupoSanguineo);
        formTramite.append('examenPsicofisico', examenPsicofisico);
        formTramite.append('imagenLicencia', imagenLicencia);

        tramiteService.renovarCarnet(formTramite)
    };

    const handleImage = (e) => {
        setImagenLicencia(e.target.files[0])
    }
    const hanldeDescargar = (e) => {
        let file = { imagenLicencia: "tramitesPDF/discapacitado.png" }
        tramiteService.descargarTramite(file)
    }

    return (
        <div className="flex min-h-full flex-1 flex-row justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    src={tramiteIcon}
                    alt="logo tramtie"
                />
                <div className="mx-auto ">
                    <div>
                        <div>
                            <div>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Renovar Carnet</h1>
                                <p className="text-base font-semibold leading-7 text-indigo-600">Requisitos</p>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                    eget aliquam. Quisque id at vitae feugiat egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Formulario
                </h2>
                <form className="space-y-6" onSubmit={onSubmitForm}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                Domicilio Actual
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                required
                                onChange={e => setDomicilio(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                Tenes problemas en la vista?
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="vista"
                                name="vista"
                                type="checkbox"
                                onChange={e => setVista(e.target.checked)}
                                className="pl-2  ml-2 block w-100 rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {vista ? <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="date" className="block text-sm font-medium leading-2 text-gray-900">
                                Descripcion del problema
                            </label>
                        </div>
                        <div className="mt-2">
                            <textarea
                                id="vistaDetalle"
                                name="vistaDetalle"
                                type="string"
                                onChange={e => setVistaDetalle(e.target.value)}
                                className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                        : ""}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="date" className="block text-sm font-medium leading-2 text-gray-900">
                                Grupo Sanguineo
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="grupoSanguineo"
                                name="grupoSanguineo"
                                type="string"
                                required
                                onChange={e => setGrupoSanguineo(e.target.value)}
                                className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                Realizó el examen psicofísico?
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="examenPsicofisico"
                                name="examenPsicofisico"
                                type="checkbox"
                                onChange={e => setExamenPsicofisico(e.target.checked)}
                                className="pl-2  ml-2 block w-100 rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                descargar
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="examenPsicofisico"
                                name="examenPsicofisico"
                                type="checkbox"
                                onChange={e => hanldeDescargar()}
                                className="pl-2  ml-2 block w-100 rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Imagen de su Licencia Anterior
                        </label>
                        <div className="mt-2">
                            <input
                                id="file"
                                name="file"
                                type="file"
                                required
                                onChange={e => handleImage(e)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Iniciar Tramite
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default FormTramite;
