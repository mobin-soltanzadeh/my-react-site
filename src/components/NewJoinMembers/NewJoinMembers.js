import React from "react";
import NewJoinMember from "../NewJoinMember/NewJoinMember";

import { NewJoinMembersDatas } from "../../datas";

export default function NewJoinMembers({lang}) {
    return (
        <div dir={lang==="en"? "ltr": "rtl"} className="NewJoinMembers basis-2/5 flex flex-col items-start gap-y-1 w-full h-full p-4 border shadow-md rounded-lg">
            <p className="text-2xl xl:text-4xl font-semibold mb-4">{lang==="en"? "New Join Members": "اعضای اضافه شده"}</p>
        
            {
                NewJoinMembersDatas.map(user => (
                    <NewJoinMember key={user.id} {...{imgSrc: user.imgSrc, name: (lang==="en"? user.enName: user.faName) , job: (lang==="en"? user.enJob: user.faJob)}} />
                ))
            }
        </div>
    );
}
