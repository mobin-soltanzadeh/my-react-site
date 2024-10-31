import React from "react";
import { Link } from "react-router-dom";

import { FaArrowTurnUp } from "react-icons/fa6";

export default function Navbar({lang}) {
    let en = ["Home", "Panel Admin", "Services", "About me", "Blog", "Pages", "Projects"];
    let fa = ["خانه", "پنل ادمین", "سرویس ها", "درباره من", "وبلاگ", "صفحات", "پروژه ها"];
    let result = (lang==="en"? en: fa);


    return (
        <ul className="Navbar flex justify-center items-center gap-x-5 text-zinc-800 child-hover:text-orange-500 child:transition-colors child:duration-300">

            <Link>
                <li className="nav-item home text-orange-400">{result[0]}</li>
            </Link>

            <Link to={"/my-react-site/admin"}>
                <li className="relative nav-item about-me">
                    {result[1]}
                    <span className={`absolute top-full ${lang==="en"? "left-14": "right-10"}`}><FaArrowTurnUp /></span>
                    {/* <span className={`absolute bottom-full ${lang==="en"? "left-14": "right-10"} rotate-180`}><FaArrowTurnUp /></span> */}
                </li>

            </Link>

            <Link>
                <li className="relative nav-item service flex justify-center items-center group/s">{result[2]}</li>
            </Link>

            <Link>
                <li className="nav-item pages flex justify-center items-center">{result[3]}</li>
            </Link>
            
            <Link>
                <li className="nav-item blog flex justify-center items-center">{result[4]}</li>
            </Link>

            <Link>
                <li className="nav-item project flex justify-center items-center">{result[5]}</li>
            </Link>
            
            <Link>
                <li className="nav-item project flex justify-center items-center">{result[6]}</li>
            </Link>
            
        </ul>
    )
}