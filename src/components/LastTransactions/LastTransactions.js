import React from "react";
import UserImage from "../UserImage/UserImage"


import { lastTransactionsMembers } from "../../datas"



export default function NewJoinMembers({lang}) {
    let flag = (lang==="en")

    return (
        <table dir={lang==="en"? "ltr": "rtl"} className="NewJoinMembers basis-3/5 flex flex-col justify-center items-start gap-y-1 w-full p-4 border shadow-md rounded-lg">
            <p className="text-2xl xl:text-4xl font-semibold mb-4">{lang==="en"? "Lates TransActions": "آخرین معامله"}</p>

            <thead className="flex flex-col justify-center items-start text-xl xl:text-2xl font-semibold w-full p-2">
                <tr className="flex justify-between items-center gap-x-3 w-full">
                    <td className="Customer basis-[40%] px-4"> {lang==="en"? "Customer": "مشتری"} </td>
                    <td className="Date basis-1/5"> {lang==="en"? "Date": "تاریخ"} </td>
                    <td className="Amount basis-1/5"> {lang==="en"? "Amount": "میزان"} </td>
                    <td className="Status basis-1/5"> {lang==="en"? "Status": "وضعیت"} </td>
                </tr>
            </thead>
            
            <tbody className="flex flex-col justify-center items-start gap-y-1 w-full p-4">
                {
                    lastTransactionsMembers.map(user => (
                        <tr key={user.id} className="flex justify-between items-center gap-x-3 w-full">
                            <td className="Customer basis-[40%] flex justify-start items-center text-start gap-x-2"> 
                                <UserImage w={64} h={64} imgSrc={user.imgSrc} imgAlt={"user-img"} />
                                <span>{lang==="en"? user.enName: user.faName}</span>
                            </td>
                            <td className="Date basis-1/5"> {lang==="en"? user.enDate: user.faDate} </td>
                            <td className="Amount basis-1/5">${user.amount}</td>
                            <td className="Status basis-1/5">
                                {user.enStatus==="Approved" && <button className={`bg-teal-400/50 px-3 py-1 rounded-xl`}>{lang==="en"? user.enStatus: user.faStatus}</button>}
                                {user.enStatus==="Declined" && <button className={`bg-rose-400/50 px-3 py-1 rounded-xl`}>{lang==="en"? user.enStatus: user.faStatus}</button>}
                                {user.enStatus==="Pending" && <button className={`bg-blue-400/50 px-3 py-1 rounded-xl`}>{lang==="en"? user.enStatus: user.faStatus}</button>}
                            </td>
                        </tr>
                    ))   
                }
            </tbody>
        </table>
    );
}
