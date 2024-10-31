import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";

import Features from "../../components/Features/Feature";
import Chart from "../../components/Chart/Chart";
import NewJoinMembers from "../../components/NewJoinMembers/NewJoinMembers";
import LastTransactions from "../../components/LastTransactions/LastTransactions";

import { monthSales } from "../../datas";

export default function AdminHome() {
    const [language, setLanguage] = useOutletContext()

    return (
        <div className="AdminHome basis-4/6 flex-1 flex flex-col justify-start items-center gap-y-6">
            <Features lang={language} />
            <Chart lang={language} title={language==="en"? "Month Sale": "فروش ماهانه"} cartesian="10 10" data={monthSales} />
            
            <div dir="ltr" className="flex justify-between items-start gap-x-2 xl:gap-x-4 w-full">
                <NewJoinMembers lang={language} />
                <LastTransactions lang={language} />
            </div>
        </div>
    );
}