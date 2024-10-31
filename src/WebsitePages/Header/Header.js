import React, { useState } from "react";

import Logo from "./Logo"
import Navbar from "./Navbar"
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";
import LangBtn from "../../components/LangBtn/LangBtn";

import { GoSignIn } from "react-icons/go";

export default function Header({lang, changeLang}) {
    const [headerWidth, setHeaderWidth] = useState("100%");
    const [headerTop, setHeaderTop] = useState("0px");
    const [headerBg, setHeaderBg] = useState("rgb(212 212 212)");
    const [headerRadius, setHeaderRadius] = useState("0px");

    window.addEventListener("scroll", e => {
        if(window.scrollY > 120) {
            setHeaderWidth("93%");
            setHeaderTop("20px");
            setHeaderBg("rgb(212 212 212 / 0.3)");
            setHeaderRadius("16px");
        } else {
            setHeaderWidth("100%");
            setHeaderTop("0px");
            setHeaderBg("rgb(212 212 212)");
            setHeaderRadius("0px");
        }
    })



    return (
        <header dir={lang==="en"? "ltr": "rtl"} style={{width: headerWidth, top: headerTop, backgroundColor: headerBg, borderRadius: headerRadius}} className='WebsiteHeader sticky flex justify-between items-center mx-auto text-zinc-080 dark:text-gray-100 text-base lg:text-lg xl:text-xl 2xl:text-2xl px-10 xl:px-20 py-4 shadow-lg border-b-[3px] border-b-zinc-900/30 backdrop-blur-[6px] transition-all duration-700 z-50'>
            {/* site Logo */}
            <Logo></Logo>

            {/* site main navbar */}
            <Navbar lang={lang} onChangeLang={changeLang} />
            

            {/* site login & theme btn & Language btn*/}
            <div className='relative flex justify-center items-center gap-x-4 px-4 py-3 bg-orange-300 rounded-xl group'>
                {/* just make background animation */}
                <div className='absolute top-0 left-0 w-full h-full group-hover:w-0 bg-orange-500 transition-all duration-700 z-10 rounded-md'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0 group-hover:h-full bg-neutral-800 transition-all duration-700 z-20 rounded-md'></div>
                
                {/* theme btn */}
                <ThemeBtn color={"text-zinc-900"} />
                <span className='hidden lg:block w-px h-8 group-hover:ml-1 bg-white/30 z-50'></span>

                <LangBtn lang={lang} changeLang={changeLang} color="text-zinc-900"/>
                <span className='hidden lg:block w-px h-8 group-hover:ml-1 bg-white/30 z-50'></span>
                
                {/* login btn */}
                <div className='flex justify-center items-center text-white hover:text-orange-500 overflow-hidden z-50 -translate-y-96 group-hover:translate-y-0 transition-all duration-500'>
                    <span className='hidden lg:block text-sm lg:textbase xl:text-lg 2xl:text-xl'>{lang==="en"? "Login": "ثبت نام"}</span>
                    <GoSignIn className='w-8 h-8 pt-1'/>
                </div>
            </div>
        </header>
    );
}
