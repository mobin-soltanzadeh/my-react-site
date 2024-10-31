import React from "react";
import { Link } from "react-router-dom";

import ThemeBtn from "../ThemeBtn/ThemeBtn"
import LangBtn from "../LangBtn/LangBtn";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar(props) {
    let lang = props.lang    
    
    return (
        <div dir="ltr" className="Topbar fixed top-0 w-full h-20 text-gray-900 bg-gray-200/40 dark:bg-gray-500/40 transition-[background-color] duration-700 backdrop-blur-sm z-10">

            <div className="Topbar-wrapper flex justify-between items-center w-full h-full px-8">

                <div style={{order: lang==="en"? 2: 1}} dir="rtl" className="right-side flex justify-center items-center gap-x-4">
                    <img src={require("../../data/images/default-prof2.png")} alt="userImgage" className="w-14 h-14 rounded-full" />

                    <div dir="ltr" className="relative cursor-pointer group">
                        <div className="text-neutral-500 dark:text-zinc-900 hover:text-orange-500 dark:hover:text-orange-500 hover:rotate-[360deg] hover:scale-150 transition-all duration-1000"> <SettingsIcon className="w-7 h-7 " /> </div>
                    </div>

                    <LangBtn lang={lang} changeLang={props.changeLang} color="text-neutral-500" darkColor="dark:text-zinc-900" />
                    <div className="relative cursor-pointer">
                        <NotificationsNoneIcon className="w-7 h-7 text-neutral-500 dark:text-zinc-900 hover:text-orange-500 dark:hover:text-orange-500 transition-all duration-500" />
                        <span className="absolute -top-2 -right-2 text-center text-gray-100 text-sm w-5 h-5 leading-5 bg-rose-500 rounded-full">2</span>
                       
                    </div>

                    <ThemeBtn color={"text-neutral-500"} className="ml-8" />
                </div>
                
                <Link to={"/my-react-site"}>
                    <div style={{order: lang==="en"? 1: 2}} dir="ltr" className="left-side flex justify-center items-center gap-x-2">
                        <img src={require("../../data/images/demo Logo.png")} alt="Logo" className="w-[76px] h-20 p-1" />
                        <span className="font-mangiola font-semibold tracking-wide text-3xl">Dashboard Admin</span>
                    </div>
                </Link>

            </div>

        </div>
    );
}
