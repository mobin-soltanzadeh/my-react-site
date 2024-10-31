import React from "react";

import { Link, useLocation } from "react-router-dom";

import { enSidebar, faSidebar } from "../../datas";

import { LineStyle, Timeline, TrendingUp ,Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline } from "@mui/icons-material";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
 
export default function Sidebar({lang}) {
    let result = (lang === "en" ? enSidebar: faSidebar);

    let location = useLocation()
    console.log(location, location.pathname);
    
    
    return (
        <div dir={result[0]} className={`Sidebar basis-[13%] ${location.pathname=="/my-react-site/admin"? "hover:basis-1/4": ""} flex flex-col justify-start items-start gap-y-6 p-6 shadow-md border rounded-lg transition-[flex] duration-1000`}>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className={`text-xl font-black ${lang==="en"? "font-mangiola tracking-[0.08em]": ""} text-neutral-600 dark:text-gray-200`} >{result[1]}</p>

                <div>
                    <Link to={"/my-react-site/admin"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 bg-blue-400/40 rounded-xl`} >
                        <LineStyle />
                        <p>{result[2]}</p>
                    </Link>

                    <Link to={"analytics"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <Timeline/>
                        <p>{result[3]}</p>
                    </Link>

                    <Link to={"sales"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <TrendingUp />
                        <p>{result[4]}</p>
                    </Link>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className={`text-xl font-black ${lang==="en"? "font-mangiola tracking-[0.08em]": ""} text-neutral-600 dark:text-gray-200`} >{result[5]}</p>

                <div>
                    <Link to={"users"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <PeopleOutlinedIcon />
                        <p>{result[6]}</p>
                    </Link>

                    <Link to={"products"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <Storefront />
                        <p>{result[8]}</p>
                    </Link>

                    <Link to={"transactions"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <AttachMoney/>
                        <p>{result[9]}</p>
                    </Link>

                    <Link to={"reports"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <BarChart />
                        <p>{result[10]}</p>
                    </Link>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className={`text-xl font-black ${lang==="en"? "font-mangiola tracking-[0.08em]": ""} text-neutral-600 dark:text-gray-200`} >{result[11]}</p>

                <div>
                    <Link to={"mails"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <MailOutline />
                        <p>{result[12]}</p>
                    </Link>

                    <Link className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <DynamicFeed/>
                        <p>{result[13]}</p>
                    </Link>

                    <Link className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <ChatBubbleOutline />
                        <p>{result[14]}</p>
                    </Link>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className={`text-xl font-black ${lang==="en"? "font-mangiola tracking-[0.08em]": ""} text-neutral-600 dark:text-gray-200`} >{result[15]}</p>

                <div>
                    <Link className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <WorkOutlineOutlinedIcon />
                        <p>{result[16]}</p>
                    </Link>

                    <Link to={"analytics"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <Timeline/>
                        <p>{result[17]}</p>
                    </Link>

                    <Link to={"reports"} className={`flex ${lang==="en"? "text-xl": ""} gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl`} >
                        <ReportGmailerrorredOutlinedIcon />
                        <p>{result[18]}</p>
                    </Link>
                </div>
            </div>

        </div>
    );
}