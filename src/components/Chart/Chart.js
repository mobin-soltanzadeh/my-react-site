import React, { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { enMonth, faMonth } from "../../datas";

export default function Chart({lang, title, cartesian, data}) {
    let monthResult = (lang==="en"? enMonth: faMonth);
    
    let XAxisData = [
        { month: monthResult[0], sale: data[0] },
        { month: monthResult[1], sale: data[1]  },
        { month: monthResult[2], sale: data[2]  },
        { month: monthResult[3], sale: data[3] },
        { month: monthResult[4], sale: data[4]  },
        { month: monthResult[5], sale: data[5]  },
        { month: monthResult[6], sale: data[6] },
        { month: monthResult[7], sale: data[7]  },
        { month: monthResult[8], sale: data[8]},
        { month: monthResult[9], sale: data[9]  },
        { month: monthResult[10], sale: data[10] },
        { month: monthResult[11], sale: data[11]  },
    ];

    return (
        <div className="Chart relative flex flex-col gap-y-8 w-full p-4 shadow-md border rounded-lg">
            <p className="text-xl base:text-2xl xl:text-4xl">{title}</p>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={XAxisData}  >
                    <Line type="monotone" dataKey="sale" stroke="#8884d8" animationDuration={2500} animationBegin={500} />

                    {cartesian && <CartesianGrid stroke="#78716c" strokeDasharray={cartesian} />}

                    <XAxis dataKey="month" />
                    {lang==="en" && <YAxis dataKey={"sale"} />}

                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}