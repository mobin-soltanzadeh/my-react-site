import React, { useState } from "react";

// MUI
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

// local 
import { MailsDataRows } from "../../datas";
import UserImage from "../../components/UserImage/UserImage";

export default function Mail() {
    const [MailsColumns, setReportsColumns] = useState([
        {field: "id", headerName: "Id", headerAlign: "center", width: 130, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {
            field: "from-user", headerName: "From User", headerAlign: "center", width: 250, align: "center",
            renderCell: params => {
                return (
                    <div className="text-gray-900 dark:text-gray-200 flex justify-start items-center gap-x-2">
                        <UserImage {...{w: 50, h:50, imgSrc: params.row.fromUser.avatar}}/>
                        <p>{params.row.fromUser.name}</p>
                    </div>
                )
            }
        },
        
        {
            field: "to-user", headerName: "To User", headerAlign: "center", width: 250, align: "center",
            renderCell: params => {                
                return (
                    <div className="text-gray-900 dark:text-gray-200 flex justify-start items-center gap-x-2">
                        <UserImage {...{w: 50, h:50, imgSrc: params.row.toUser.avatar}}/>
                        <p>{params.row.toUser.name}</p>
                    </div>
                )
            }
        },
        {field: "title", headerName: "Title", headerAlign: "center", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "massage", headerName: "Massage", headerAlign: "center", width: 250, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
    ]);

    const [MailsRows, setReportsRows] = useState([...MailsDataRows]);
    
    return (
        <div dir="ltr" className="Mail grow basis-5/6 w-full dark:text-white">
        {
            (MailsRows.length > 0) && 
            <Box sx={{ height: "100%", width: '100%' }}>
                <DataGrid
                columns={MailsColumns}
                rows={MailsRows}
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