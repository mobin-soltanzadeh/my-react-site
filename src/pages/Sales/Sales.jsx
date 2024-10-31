import React from "react";

// MUI
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

// local 
import { SalesDataRows } from "../../datas";
import UserImage from "../../components/UserImage/UserImage";
import { buttonBaseClasses } from "@mui/material";

export default function Sales() {
    const salesColmuns = [
        {field: "id", headerName: "Id", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 100, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "productName", headerName: "Type", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {
            field: "product-name", headerName: "Product Name", headerClassName: "text-[20px] font-dana-demibold" , width: 250, headerAlign: "center", align: "center",
            renderCell: params => {
                return (
                    <div className="flex justify-start items-center gap-x-2 text-gray-900 dark:text-gray-200">
                        <UserImage {...{w: 50, h:50, imgSrc: params.row.productName==="Phone"? "phone1.png": "laptop1.png", imgAlt: "product-image"}} />
                        <p>{params.row.name}</p>
                    </div>
                )
            }
        },
        {field: "salesId", headerName: "Sell - Id", width: 150, headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "price", headerName: "Price", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200 flex justify-center items-center w-full' },
        {
            field: "status", headerName: "Status", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 150, align: "center",
            renderCell: (params) => {
                return ( <button className={`${params.row.status==="valid"? "bg-teal-400": "bg-rose-400"} text-gray-900 dark:text-gray-200 text-xl w-24 px-2 py-2 rounded-xl`}>{params.row.status}</button> )
            }
        }
    ];

    return (
        <div dir="ltr" className="Sales grow basis-5/6 w-full">
            <Box sx={{width: "100%", height: "100%"}}>
                <DataGrid 
                rows={SalesDataRows}
                columns={salesColmuns}
                rowHeight={100}

                initialState={{ pagination: { paginationModel: {pageSize: 7} } }}
                pageSizeOptions={[7]}
                checkboxSelection
                disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}


