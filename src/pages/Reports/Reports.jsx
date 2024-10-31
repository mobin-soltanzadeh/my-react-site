import React, { useState } from "react";

// MUI
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

// local 
import { ReportsDataRows } from "../../datas";
import UserImage from "../../components/UserImage/UserImage";

export default function Reports() {
    const [reportsColumns, setReportsColumns] = useState([
        {field: "id", headerName: "Id", headerAlign: "center", width: 130, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {
            field: "user", headerName: "From User", headerAlign: "center", width: 250, align: "center",
            renderCell: params => {
                return (
                    <div className="text-gray-900 dark:text-gray-200 flex justify-start items-center gap-x-2">
                        <UserImage {...{w: 50, h:50, imgSrc: params.row.fromUser.avatar}}/>
                        <p>{params.row.fromUser.name}</p>
                    </div>
                )
            }
        },
        {field: "title", headerName: "Title", headerAlign: "center", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "massage", headerName: "Massage", headerAlign: "center", width: 250, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
    ]);

    const [reportsRows, setReportsRows] = useState([...ReportsDataRows]);
    
    return (
        <div dir="ltr" className="Reports grow basis-5/6 w-full dark:text-white">
        {
            (reportsRows.length > 0) && 
            <Box sx={{ height: "100%", width: '100%' }}>
                <DataGrid
                columns={reportsColumns}
                rows={reportsRows}
                rowHeight={100}

                initialState={{ pagination: { paginationModel: {pageSize: 7} } }}
                pageSizeOptions={[7]}
                checkboxSelection
                disableRowSelectionOnClick
                />
            </Box> 
        }
        </div>
    );
}