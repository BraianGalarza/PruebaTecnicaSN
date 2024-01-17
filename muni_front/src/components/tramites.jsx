import React from 'react';
import TramiteList from './tramiteList.jsx';

const Tramites = () => {
  const tramites = [
    { nombreTramite: 'Trámite 1', estadoTramite: "PENDIENTE" },
    { nombreTramite: 'Trámite 2', estadoTramite: "APROBADO" },
    { nombreTramite: 'Trámite 3', estadoTramite: "RECHAZADO" },
  ];

  return (
    <div>
      <TramiteList tramites={tramites} />
    </div>
  );
};

export default Tramites;
