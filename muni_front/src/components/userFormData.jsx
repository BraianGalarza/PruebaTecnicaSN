import { PaperClipIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react';
import LoadingSpiner from './loadingSpiner';
import *  as tramiteService from "../services/tramitesService";
import { getItems, getRol } from "../utils/sessionHandler";

const UserFormData = (props) => {
    const user = getItems()



    useEffect(() => {

    }, [])

    return (
        <div className="ml-8 mt-8 z-50 bg-white p-4 rounded-md shadow-md" style={{ width: "35%" }}>
            <div id='form_user'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Datos Personales</h3>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user ? user.name : ""}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user ? user.lastName : ""}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user ? user.dni : ""}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</dt>
                            <input type="date" name="" id="" disabled defaultValue={user? user.date.split(" ")[0]: ""} />
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Rol</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user ? user.rol : ""}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user ? user.email : ""}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    // }
    // </>
  );
};

export default UserFormData;
