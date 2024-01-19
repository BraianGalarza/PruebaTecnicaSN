import React from 'react';
import DataTable from "react-data-table-component";

const AdminTramiteList = (props) => {
    const datos = props.tramites;

    const paginacionOpciones = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };

    const LeyendaSinDatos = "NO SE ENCONTRARON TRÁMITES PEDIDOS";

    const customStyles = {
        rows: {
            style: {},
        },
        headCells: {
            style: {
                backgroundColor: "rgb(31 41 55)",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
            },
        },
        cells: {
            style: {
                marginLeft: "1px",
            },
        },
    };

    const columnas = [
        {
            name: "NRO. DEL TRAMITE",
            selector: (row) => row.id,
            sortable: true,
            reorder: true,
        },
        {
            name: "TRÁMITE",
            selector: (row) => row.nombreTramite,
            sortable: true,
            reorder: true,
        },
        {
            name: "ESTADO",
            selector: (row) => row.estado,
            sortable: true,
            reorder: true,
        },
        {
            name: "COMENTARIO",
            selector: (row) => row.comentario,
            sortable: true,
            reorder: true,
        },
        {
          name: "VER DETALLE",
          key: "action",
          text: "Action",
          className: "action",
          sortable: false,
          cell: (record) => {
            return (
              <div>
                <button
                  className="relative rounded-full bg-gray-800 p-1 pr-3 pl-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"

                  onClick={() => {
                    props.setTramiteHandler(record)
                  }}
                >
                    EDITAR
                </button>
              </div>
            )
          },
        }
    ];

return (
    <div className="bg-gray-200 p-6 rounded-md">
        <div className="overflow-x-auto">
            <DataTable
                title="LISTA DE TRAMITES"
                columns={columnas}
                responsive
                data={datos}
                customStyles={customStyles}
                pagination
                paginationComponentOptions={paginacionOpciones}
                noDataComponent={LeyendaSinDatos}
                striped
                highlightOnHover
                dense
            />
        </div>
    </div>
);
};

export default AdminTramiteList;
