import React from "react";
import { useOutletContext } from "react-router"; 

import { feachers, monthRevanue, monthSales, monthCost } from "../../datas";
import Chart from "../../components/Chart/Chart"
import Features from "../../components/Features/Feature";

export default function Analytics() {
    const [language, setLanguage] = useOutletContext()

    return (
        <div className="AdminHome basis-4/5 grow flex flex-col justify-start items-center gap-y-6">
            <Chart lang={language} title={language==="en"? "Month Sale": "فروش ماهانه"} cartesian="10 10" data={monthSales}/>
            <Features lang={language} feacher={feachers} />

            <Chart lang={language} title={language==="en"? "Month Revanue": "درامد ماهانه"} cartesian="10 10" data={monthRevanue} />
            <Chart lang={language} title={language==="en"? "Month Cost": "هزینه های ماهانه"} cartesian="10 10" data={monthCost} />
        </div>
    );
}

{/* <Chart lang={language} title={language==="en"? "Month Sale": "فروش ماهانه"} cartesian="10 10" /> */}