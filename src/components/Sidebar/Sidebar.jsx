import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import { enSidebar, faSidebar } from "../../datas";

import { LineStyle, Timeline, TrendingUp ,Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline } from "@mui/icons-material";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
 
export default function Sidebar(props) {
    let result = (props.lang === "en" ? enSidebar: faSidebar);

    let location = useLocation()
    
    return (
        <div dir={result[0]} className={`Sidebar basis-[13%] grow-0 ${ (location.pathname==="/admin"||location.pathname==="/admin/") ? "hover:basis-1/5": ""} flex flex-col justify-start items-start gap-y-6 p-6 shadow-md border rounded-lg transition-[flex] duration-1000`}>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className="text-xl font-black tracking-[0.08em] text-neutral-600 dark:text-gray-200">{result[1]}</p>

                <div>
                    <NavLink to={"/admin"} className="flex gap-x-1 px-4 py-2 bg-blue-400/40 rounded-xl">
                        <LineStyle />
                        <p>{result[2]}</p>
                    </NavLink>

                    <NavLink to={"analytics"} className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <Timeline/>
                        <p>{result[3]}</p>
                    </NavLink>

                    <NavLink to={"sales"} className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <TrendingUp />
                        <p>{result[4]}</p>
                    </NavLink>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className="text-xl font-black tracking-[0.08em] text-neutral-600 dark:text-gray-200">{result[5]}</p>

                <div>
                    <NavLink to={"users"} className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <PeopleOutlinedIcon />
                        <p>{result[6]}</p>
                    </NavLink>

                    <NavLink to={"products"} className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <Storefront />
                        <p>{result[8]}</p>
                    </NavLink>

                    <NavLink to={"transactions"} className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <AttachMoney/>
                        <p>{result[9]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <BarChart />
                        <p>{result[10]}</p>
                    </NavLink>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className="text-xl font-black tracking-[0.08em] text-neutral-600 dark:text-gray-200">{result[11]}</p>

                <div>
                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <MailOutline />
                        <p>{result[12]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <DynamicFeed/>
                        <p>{result[13]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <ChatBubbleOutline />
                        <p>{result[14]}</p>
                    </NavLink>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1 w-full">
                <p className="text-xl font-black tracking-[0.08em] text-neutral-600 dark:text-gray-200">{result[15]}</p>

                <div>
                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <WorkOutlineOutlinedIcon />
                        <p>{result[16]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <Timeline/>
                        <p>{result[17]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-4 py-2 hover:bg-blue-400/20 rounded-xl">
                        <ReportGmailerrorredOutlinedIcon />
                        <p>{result[18]}</p>
                    </NavLink>
                </div>
            </div>

        </div>
    );
}