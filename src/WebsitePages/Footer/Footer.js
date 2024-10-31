import React from "react";
import { FaInstagram, FaTelegramPlane, FaTwitter, FaGithub  } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { PiGithubLogoLight } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiGithubLogoFill } from "react-icons/pi";


export default function Footer({lang}) {
    let en = ["ltr", "mobin soltanzadeh", "About me", "I am a computer engineering student and i like design and programming web-Pages. The purpose of this site is to show some of my abilities"];
    let fa = ["rtl", "مبین سلطان زاده", "درباره من", "من یه دانشجوی کامپوتر هستم که به طراحی سایت و کار گروهی علاقه دارم, هدف از طراحی این سایت ساده این بوده که قسمتی از توانایی هامو به شما نشون بدم"];
    let result = (lang==="en"? en: fa);

    return (
    <div dir={result[0]} className="Footer flex flex-col justify-center items-center text-zinc-900 dark:text-gray-200 w-full bg-gray-100 dark:bg-zinc-900 py-10 2xl:py-16 transition-colors duration-1000">
        <div className="flex justify-between items-center w-3/5 my-auto mx-auto">
            <p className={`${lang==="en"? "font-mangiola": ""} text-3xl`} >{result[1]}</p>
            <div className="flex justify-center items-center gap-x-2">

                <a href="https://t.me/msoltani1407" target="_blank" className="w-14 h-14"> <button className="bg-gray-100 dark:bg-neutral-300 text-zinc-800 dark:text-white hover:bg-sky-500 dark:hover:bg-sky-500 rounded-full transition-colors"> <FaTelegramPlane className="w-14 h-14 p-2 -translate-x-0.5 translate-y-px" /></button> </a>
                <button className="bg-gray-100 dark:bg-neutral-300 text-zinc-800 dark:text-white hover:bg-sky-500 dark:hover:bg-sky-500 rounded-full transition-colors"> <FaInstagram className="w-14 h-14 p-2" /></button>
                <button className="bg-gray-100 dark:bg-neutral-300 text-zinc-800 dark:text-white hover:bg-sky-500 dark:hover:bg-sky-500 rounded-full transition-colors"> <FaTwitter className="w-14 h-14 p-2" /></button>
                <a href="https://github.com/mobin-soltanzadeh" target="_blank" className="w-14 h-14"> <button className="bg-gray-100 dark:bg-neutral-300 text-zinc-800 dark:text-white hover:bg-sky-500 dark:hover:bg-sky-500 rounded-full transition-colors"> <PiGithubLogoFill className="w-14 h-14 p-2" /></button> </a>
                
            </div>
        </div>

        <span className="w-3/5 h-0.5 my-8 bg-zinc-700"></span>

        <div className="w-3/5 mx-auto">
            <div className={`${lang==="en"? "w-[360px]": "w-[350px]"}`}>
            {/* <div className="w-[360px]"> */}
                <h1 className="text-2xl mb-4">{result[2]}</h1>
                <p>{result[3]}</p>
                {/* <p>من یه دانشجوی کامپوتر هستم که به طراحی سایت و کار گروهی علاقه دارم, هدف از طراحی این سایت ساده این بوده که قسمتی از توانایی هامو به شما نشون بدم</p> */}
            </div>
        </div>
        
    </div>
);
}
