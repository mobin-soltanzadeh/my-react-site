import React, { useState } from "react";

import ThemeBtn from "../ThemeBtn/ThemeBtn"

import { FaRegUser } from "react-icons/fa";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar(props) {
    let lang = props.lang
    let en = ["ltr", "Dashboard", "Home", "Analytics", "Sales", "Quick Menu", "Users", "New User", "Products", "Transactions", "Report", "Notifications", "Mails", "FeedBack", "Messages", "Staff", "Management", "Analytics", "Reports"];
    let fa = ["rtl", "داشبورد", "خانه", "تجزیه و تحلیل", "فروش", "دسترسی سریع", "کاربران", "کاربر جدید", "محصولات", "معاملات", "گزارش ها", "اعلام ها", "ایمیل ها", "بازخورد", "پیام ها", "پرسنل", "مدیریت", "تجریه و تحلیل", "گزارش ها"];
    let result = (lang === "en" ? en: fa);

    return (
        <div dir={result[0]} className="Topbar  fixed top-0 w-full h-20 bg-gray-200/40 backdrop-blur-sm z-10">

            <div className="Topbar-wrapper flex justify-between items-center w-full h-full px-8">

                <div style={{order: lang==="en"? 2: 1}} dir="rtl" className="right-side flex justify-center items-center gap-x-4">
                    <img src={require("../../data/images/default-prof2.png")} alt="userImgage" className="w-14 h-14 rounded-full" />

                    <div className="cursor-pointer">
                        <SettingsIcon className="w-7 h-7 text-neutral-500 hover:text-orange-500 transition-all duration-500" />
                    </div>

                    <div className="relative cursor-pointer flex items-end">
                        <LanguageIcon onClick={props.changeLang} className="w-7 h-7 text-neutral-500 hover:text-orange-500 transition-all duration-500" />
                        <span className="w-[18px]">{lang}</span>
                    </div>
                    
                    <div className="relative cursor-pointer">
                        <NotificationsNoneIcon className="w-7 h-7 text-neutral-500 hover:text-orange-500 transition-all duration-500" />
                        <span className="absolute -top-2 -right-2 text-center text-gray-100 text-sm w-5 h-5 leading-5 bg-rose-500 rounded-full">2</span>
                    </div>

                    <ThemeBtn className="ml-8" />
                </div>
                
                <div style={{order: lang==="en"? 1: 2}} dir="ltr" className="left-side flex justify-center items-center gap-x-2">
                    <img src={require("../../data/images/demo Logo.png")} alt="Logo" className="w-[76px] h-20 p-1" />
                    <span className="font-mangiola text-3xl">Dashboard Admin With <span className="text-orange-400 hover:text-orange-600">Real API</span></span>
                </div>

            </div>

        </div>
    );
}
