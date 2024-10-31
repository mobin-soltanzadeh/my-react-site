import React, { useState } from "react";

import Header from ".//Header/Header"
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ResumModal from "../pages/ResumModal/ResumModal";


export default function WebsiteHome() {
    const [language, setLanguage] = useState(localStorage.getItem("language")===null? "en": localStorage.getItem("language"));

    function changeLanguage() {
        localStorage.setItem("language", language==="en"? "fa": "en")
        setLanguage(language==="en"? "fa": "en")
    }

    // let showModal = true
    // if(localStorage.getItem("showModal")) {
    //     showModal = false
    // }

    return (
        <div dir="ltr" className="WebsiteHome font-dana-medium bg-gray-300 dark:bg-gray-900 transition-colors duration-1000">        
            {/* {showModal && <ResumModal />} */}
            <Header lang={language} changeLang={changeLanguage} />
            <Main />
            <Footer lang={language} />
        </div>
    );
}
