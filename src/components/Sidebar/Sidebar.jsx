import React from "react";

import { NavLink } from "react-router-dom";

import { LineStyle, Timeline, TrendingUp ,Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline } from "@mui/icons-material";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
 
export default function Sidebar(props) {
    let en = ["ltr", "Dashboard", "Home", "Analytics", "Sales", "Quick Menu", "Users", "New User", "Products", "Transactions", "Report", "Notifications", "Mails", "FeedBack", "Messages", "Staff", "Management", "Analytics", "Reports"];
    let fa = ["rtl", "داشبورد", "خانه", "تجزیه و تحلیل", "فروش", "دسترسی سریع", "کاربران", "کاربر جدید", "محصولات", "معاملات", "گزارش ها", "اعلام ها", "ایمیل ها", "بازخورد", "پیام ها", "پرسنل", "مدیریت", "تجریه و تحلیل", "گزارش ها"];
    let result = (props.lang === "en" ? en: fa);
    
    return (
        <div dir={result[0]} className="Sidebar flex flex-col gap-y-6 min-w-[200px] max-w-[300px] p-6 bg-blue-400/10 rounded-md">

            <div className="side-bar-item flex flex-col  gap-y-1">
                <p className="text-xl font-extrabold text-neutral-500">{result[1]}</p>

                <div className="px-1">
                    <NavLink to={"/admin"} className="flex gap-x-1 px-3 py-2 bg-blue-400/30 rounded-xl">
                        <LineStyle />
                        <p>{result[2]}</p>
                    </NavLink>

                    <NavLink to={"users"} className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <Timeline/>
                        <p>{result[3]}</p>
                    </NavLink>

                    <NavLink to={"sales"} className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <TrendingUp />
                        <p>{result[4]}</p>
                    </NavLink>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1">
                <p className="text-xl font-extrabold text-neutral-500">{result[5]}</p>

                <div className="px-1">
                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <PeopleOutlinedIcon />
                        <p>{result[6]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <PersonAddAltOutlinedIcon/>
                        <p>{result[7]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <Storefront />
                        <p>{result[8]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <AttachMoney/>
                        <p>{result[9]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <BarChart />
                        <p>{result[10]}</p>
                    </NavLink>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1">
                <p className="text-xl font-extrabold text-neutral-500">{result[11]}</p>

                <div className="px-1">
                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <MailOutline />
                        <p>{result[12]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <DynamicFeed/>
                        <p>{result[13]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <ChatBubbleOutline />
                        <p>{result[14]}</p>
                    </NavLink>
                </div>
            </div>

            <div className="side-bar-item flex flex-col gap-y-1">
                <p className="text-xl font-extrabold text-neutral-500">{result[15]}</p>

                <div className="px-1">
                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <WorkOutlineOutlinedIcon />
                        <p>{result[16]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <Timeline/>
                        <p>{result[17]}</p>
                    </NavLink>

                    <NavLink className="flex gap-x-1 px-3 py-2 hover:bg-blue-400/30 rounded-xl">
                        <ReportGmailerrorredOutlinedIcon />
                        <p>{result[18]}</p>
                    </NavLink>
                </div>
            </div>

        </div>
    );
}