import React, { useEffect , useState} from 'react';
import TramiteList from './userTramiteList.jsx';
import *  as tramiteService from "../services/tramitesService";
import { getDni } from '../utils/sessionHandler.jsx';

const UserTramites = () => {

  const [tramites, setTramites] = useState("")
  const dni = getDni()

  useEffect(() => {
    tramiteService.listTramitesByIdUser(dni,setTramites)
  }, [])


  return (
    <div>
      <TramiteList tramites={tramites} />
    </div>
  );
};

export default UserTramites;
