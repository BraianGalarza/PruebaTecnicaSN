import React, { useEffect, useState } from 'react';
import *  as tramiteService from "../services/tramitesService";
import AdminTramiteList from './adminTramiteList.jsx';
import AdminModalTramiteList from './adminModalTramiteList.jsx';
import AdminFormView from './adminFormView.jsx';

const AdminTramites = () => {

    const [tramites, setTramites] = useState("")
    const [tramite, setTramite] = useState("")
    const [changeData, setChangeData] = useState(true)
    const [loadingSpiner, setLoadingSpinner] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)



    useEffect(() => {
        tramiteService.listTramitesAll(setTramites)
        return () => {
        }
    }, [])

    useEffect(() => {
        tramiteService.listTramitesAll(setTramites)
    }, [changeData])

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);

    };
    const setTramiteHandler = (tramiteList) => {
        setTramite(tramiteList)
        openModal()
    };


    const actualizarData = (data) => {
        tramiteService.changeEstateTramite(data,changeData,setChangeData,closeModal)
    }



    useEffect(() => {
        if (modalOpen) {
            setLoadingSpinner(false)
        } else {
            setLoadingSpinner(true)
        }
    }, [modalOpen])


    return (
        <div>
            <AdminTramiteList tramites={tramites} openModal={openModal} setTramiteHandler={setTramiteHandler} />
            <AdminModalTramiteList isOpen={modalOpen} closeModal={closeModal}>
                <AdminFormView tramite={tramite} actualizarData={actualizarData}></AdminFormView>
            </AdminModalTramiteList>
        </div>
    );
};

export default AdminTramites;
