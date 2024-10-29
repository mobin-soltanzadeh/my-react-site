import React, { useState } from "react";
import { Outlet } from "react-router";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ResumModal from "./ResumModal/ResumModal";


export default function App() {
    const [language, setLanguage] = useState(localStorage.getItem("language")===null? "en": localStorage.getItem("language"));        

    // deside to display or Not display ResumModal
    let showModal = true
    if(localStorage.getItem("showModal")) {
        showModal = false
    }

    function changeLanguage() {
        localStorage.setItem("language", language==="en"? "fa": "en")
        setLanguage(language==="en"? "fa": "en")
    }


    

    return (
        <div dir={language==="en"? "ltr": "rtl"} className={`App h-screen ${language==="en"? "font-mangiola tracking-[0.08em] font-semibold": "font-vazir-light"} text-gray-900 dark:text-gray-200 bg-gray-300 dark:bg-zinc-900 `}>
            {showModal && <ResumModal />}
            {/* <div onClick={func} className="w-96 h-96 leading-[384px] text-center bg-teal-400">click on me</div> */}

            <Topbar lang={language==="en"? "en": "fa"} changeLang={changeLanguage}/>

            <div className="flex gap-x-8 mt-20 p-4 xl:p-10 bg-gray-300 dark:bg-zinc-900 transition-[background-color] duration-700">
                <Sidebar lang={language==="en"? "en": "fa"}/>
                <Outlet context={[language, setLanguage]} />
            </div>
        </div>
    );
};