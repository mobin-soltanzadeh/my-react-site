import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ResumModal from "./ResumModal/ResumModal";

export default function App() {
    const [language, setLanguage] = useState("en");

    let showModal = true
    if(localStorage.getItem("showModal")) {
        showModal = false
    }

    function changeLanguage() {
        setLanguage(language==="en"? "fa": "en") 
    }

    return (
        <div dir={language==="en"? "ltr": "rtl"} className={`App h-screen ${language==="en"? "font-mangiola": "font-vazir-light"} bg-gray-300`}>
            {showModal && <ResumModal />}

            <Topbar lang={language==="en"? "en": "fa"} changeLang={changeLanguage}/>

            <div className="flex gap-x-8 mt-20 p-10 w-full">
                <Sidebar lang={language==="en"? "en": "fa"}/>
                <Outlet />
            </div>
        </div>
    );
};