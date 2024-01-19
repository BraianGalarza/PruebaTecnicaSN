import React from 'react';
import DataTable from "react-data-table-component";

const TramiteList = ({ tramites }) => {
    const datos = tramites;
console.log(datos)
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
            name: "DOMICILIO",
            selector: (row) => row.domicilio,
            sortable: true,
            reorder: true,
        },
        {
            name: "GRUPO SANGUÍNEO",
            selector: (row) => row.grupoSanguineo,
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
        // {
		
        //     cell: () => <button onClick={clickHandler}>Action</button>,
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        // },
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

export default TramiteList;
