import React from "react";
import { Link } from "react-router-dom";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import HomeRoundedIcon

export default function NotFound({type}) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center gap-y-10 font-sahel-semibold bg-gray-100 z-50">
            <img className="object-cover w-[30%] max-w-[700px]" src ={require("./404.png")} alt="" />

            <h1 className="text-4xl">متاسفانه صفحه مورد نظر شما پیدا نشد.</h1>

            <Link to={type==="admin"? "/admin": "/"} className="no-underline">
                <div className="flex no-underline justify-between items-center gap-x-2 px-3 py-2 bg-emerald-500 rounded-md">
                    <HomeRoundedIcon/>
                    <span>بازگشت به صفحه اصلی</span>
                </div>
            </Link>
        </div>
    );
}