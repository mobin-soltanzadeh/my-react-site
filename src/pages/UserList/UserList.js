import React, { useEffect, useState } from "react";

// MUI
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

// local 
import { usersDataRows } from "../../datas";
import UserImage from "../../components/UserImage/UserImage";

// icons
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function UserList() {
    const [usersColumns, setUsersColumns] = useState([
        {field: "id", headerName: "Id", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 100, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {
            field: "user", headerName: "User", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 250, align: "center",
            renderCell: params => {
                return (
                    <div className="text-gray-900 dark:text-gray-200 flex justify-start items-center gap-x-2">
                        <UserImage {...{w: 50, h:50, imgSrc: params.row.avatar}}/>
                        <p>{params.row.name}</p>
                    </div>
                )
            }
        },
        {field: "username", headerName: "Username", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "email", headerName: "Email", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 200, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "status", headerName: "Status", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {field: "actions", headerName: "TransActions", headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold", width: 150, align: "center", cellClassName: (params) => 'text-gray-900 dark:text-gray-200' },
        {
            field: "remove-edit", headerName: "Actions", width: 150, headerAlign: "center", headerClassName: "text-[20px] font-dana-demibold",
            renderCell: params => {
                return (
                    <div className="flex justify-center items-center gap-x-2">
                        <button onClick={() => editHandler(params.row.id)} className="flex justify-center items-center gap-x-2 bg-teal-400 rounded-xl px-2 py-1"> <span className="text-lg">Edit</span> <AutoFixHighOutlinedIcon /> </button>
                        <button className="text-gray-900 dark:text-gray-200" onClick={() => deleteHandler(params.row.id)}> <DeleteOutlinedIcon /> </button>
                    </div>
                );
            },
        },
    ]);

    const [usersRows, setUsersRows] = useState([...usersDataRows]);

    const [userId, setUserId] = useState();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    let row = [...usersRows];
    function deleteUser() {
        row = row.filter(user => user.id !== userId);
        setUsersRows(row);
        setShowDeleteModal(false)
    }

    function editUser() {
        let index = usersRows.findIndex(user => user.id == userId)
        let newRows = [...usersRows]
        
        if(index === -1)
            return;

        if(name)
            newRows[index].name = name;
        if(username)
            newRows[index].username = username;
        if(status)
            newRows[index].status = status;
        if(email)
            newRows[index].email = email;
            
        setUsersRows(newRows);
        setShowEditModal(false);
        setName("");
        setUsername("");
        setEmail("");
        setStatus("");
    }

    function deleteModalClickHandle(e) {        
        if(e.target.className.includes("Modal"))
            setShowDeleteModal(false);   
    }   
    function editModalClickHandle(e) {
        if(e.target.className.includes("Modal"))
            setShowEditModal(false);   
    }   

    function deleteHandler(userId) {
        setUserId(userId);
        setShowDeleteModal(true);
    }
    function editHandler(userId) {
        setUserId(userId);
        setShowEditModal(true);
    }
    
    return (
        <div dir="ltr" className="UserList grow basis-4/5 w-full">
        {
            // require("../../data/images/woman1.jpg")
            (usersRows.length > 0) && 
            <Box sx={{ height: "100%", width: '100%' }}>
                <DataGrid
                columns={usersColumns}
                rows={usersRows}
                rowHeight={100}

                initialState={{ pagination: { paginationModel: {pageSize: 7} } }}
                pageSizeOptions={[7]}
                checkboxSelection
                disableRowSelectionOnClick
                />
            </Box> 
        }

            <div style={{display: showDeleteModal? "flex": "none"}} onClick={deleteModalClickHandle} className="deleteModal Modal fixed top-0 left-0 justify-center items-center w-screen h-screen bg-black/40 backdrop-blur-[3px] z-50">
                <div className="font-bold w-1/2 max-w-[700px] p-10 bg-gray-100 border-2 border-gray-500 rounded-md">
                    <p className="text-4xl">Delete Confirm</p>

                    <p className="py-6 my-6 border-y-[3px] border-gray-500">Are you sure to delete this user ?</p>

                    <div className="flex justify-end items-center gap-x-3 text-gray-100 w-full">
                        <span className="font-semibold px-4 py-3 cursor-pointer bg-zinc-700 rounded-lg" onClick={() => setShowDeleteModal(false)}>Close</span>
                        <span className="font-semibold px-4 py-3 cursor-pointer bg-zinc-700 rounded-lg" onClick={deleteUser}>Yes, Delete</span>
                    </div>
                </div>
            </div>

            <div style={{display: showEditModal? "flex": "none"}} onClick={editModalClickHandle} className="EditModal Modal fixed top-0 left-0 justify-center items-center w-screen h-screen bg-black/40 backdrop-blur-[2px] z-10 ">
                <div className="font-bold w-1/2 max-w-[700px] p-10 bg-gray-100 border-2 border-gray-500 rounded-md">
                    <p className="text-4xl">Edit Confirm</p>
                    
                    <div className="flex flex-col py-3 my-6 gap-y-2">
                        <input type="text" placeholder={`name`} value={name} onChange={(e) => setName(e.target.value)} className="text-zinc-700 placeholder:text-zinc-600 px-4 py-3 rounded-lg outline-none border-2" />
                        <input type="text" placeholder={`username`} value={username} onChange={(e) => setUsername(e.target.value)} className="text-zinc-700 placeholder:text-zinc-600 px-4 py-3 rounded-lg outline-none border-2" />
                        <input type="email" placeholder={`email`} value={email} onChange={(e) => setEmail(e.target.value)} className="text-zinc-700 placeholder:text-zinc-600 px-4 py-3 rounded-lg outline-none border-2" />
                        <input type="text" placeholder={`staus`} value={status} onChange={(e) => setStatus(e.target.value)} className="text-zinc-700 placeholder:text-zinc-600 px-4 py-3 rounded-lg outline-none border-2" />
                    </div>

                    <div className="flex justify-end items-center gap-x-3 text-gray-100 w-full">
                        <span className="font-semibold px-4 py-3 cursor-pointer bg-zinc-700 rounded-lg" onClick={() => setShowEditModal(false)}>Close</span>
                        <span className="font-semibold px-4 py-3 cursor-pointer bg-zinc-700 rounded-lg" onClick={editUser}>Yes, Change</span>
                    </div>
                </div>
            </div>

        </div>
    );
}