import { PaperClipIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react';
import LoadingSpiner from './loadingSpiner';

const AdminFormView = (props) => {
  const [tramiteDetails, setTramiteDetails] = useState('')
  const [selectedOption, setSelectedOption] = useState('');
  const [newData, setNewData] = useState('')

  const handleChangeComentario = (e) => {
    setNewData({
      ...newData,
      comentario: e.target.value
    })
    setTramiteDetails({
      ...newData,
      comentario: e.target.value
    }
    )
  }

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
    setNewData({
      ...newData,
      estado: value
    })
    setTramiteDetails({
      ...newData,
      estado: value
    }
    )
  };
  const handleSubmit = () => {
    props.actualizarData(newData)
  };

  useEffect(() => {
    if (props.tramite) {
      setTramiteDetails(props.tramite)
      setSelectedOption(props.tramite.estado)
      setNewData(props.tramite)
    }
    return()=>{
      setTramiteDetails('')
      setSelectedOption('')
      setNewData('')
    }
  }, [props])
  
  return (
      <div id='form_tramite_admin'>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Detalles del Tramite</h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Tramite</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramiteDetails?tramiteDetails.nombreTramite:""}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Realizado por el DNI</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramiteDetails?tramiteDetails.idUsuario:""}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Estado del Tramite</dt>
              <div className="flex flex-row items-center space-x-4">
                <div className="mb-2 mx-4 items-center">
                  <label className="block">Iniciado</label>
                  <input
                    className='ml-5'
                    type="checkbox"
                    name="Iniciado"
                    id="Iniciado"
                    checked={selectedOption === 'Iniciado'}
                    onChange={() => handleCheckboxChange('Iniciado')}
                  />
                </div>

                <div className="mb-2 mx-4 items-center">
                  <label className="block">Aprobado</label>
                  <input
                    className='ml-7'
                    type="checkbox"
                    name="Aprobado"
                    id="Aprobado"
                    checked={selectedOption === 'Aprobado'}
                    onChange={() => handleCheckboxChange('Aprobado')}
                  />
                </div>

                <div className="mb-2 mx-4 items-center">
                  <label className="block">Rechazado</label>
                  <input
                    className='ml-7'
                    type="checkbox"
                    name="Rechazado"
                    id="Rechazado"
                    checked={selectedOption === 'Rechazado'}
                    onChange={() => handleCheckboxChange('Rechazado')}
                  />
                </div>
              </div>
              {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd> */}
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Comentario</dt>
              <textarea className="pl-2 pr-2 mt-2 text-sm leading-6 bg-gray-50 sm:col-span-2 sm:mt-0" style={{ maxHeight: "100px" }} name="comentario" id="" cols="30" rows="10" value={newData?newData.comentario:"asd"} onChange={handleChangeComentario}></textarea>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">{tramiteDetails?tramiteDetails.imagenLicencia.split('/').pop():""}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
          <button onClick={handleSubmit}>Guardar</button>
        </div>
      </div>
    // }
    // </>
  );
};

export default AdminFormView;
