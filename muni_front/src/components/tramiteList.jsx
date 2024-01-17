import React from 'react';
import DataTable from "react-data-table-component";

const TramiteList = ({ tramites }) => {

    const datos = tramites;
    console.log(tramites)

    const paginacionOpciones = {
        rowsPerPageText: "Filas por pagina",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };
    const LeyendaSinDatos = "NO SE ENCONTRARON TRAMITES PEDIDOS";
    const customStyles = {
        rows: {
            style: {},
        },

        headCells: {
            style: {
                backgroundColor: "rgb(31 41 55)",
                color: "white",
                "&:hover": {
                    cursor: "pointer",
                },
                fontSize: "15px",
                fontWeight: "bold",
            },
        },
        cells: {
            style: {
                marginLeft: "1px",
                "&:hover": {
                    cursor: "pointer",
                },
            },
        },
    };
    const columnas = [
        {
            name: "TRAMITE",
            selector: (row) => row.nombreTramite,
            sortable: true,
            compact: true,
            reorder: true,
            center: true,
        },
        {
            name: "ESTADO",
            selector: (row) => row.estadoTramite,
            sortable: true,
            compact: true,
            reorder: true,
            center: true,

        },
    ];
    return (
        <div className="">
            <DataTable
                title="TRAMITES"
                columns={columnas}
                responsive
                data={datos}
                customStyles={customStyles}
                fixedHeader
                pagination
                paginationComponentOptions={paginacionOpciones}
                noDataComponent={LeyendaSinDatos}
                striped
                highlightOnHover
                dense
            ></DataTable>
        </div>
    );
};

export default TramiteList;
