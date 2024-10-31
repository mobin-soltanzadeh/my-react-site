import React from 'react'

import { HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";

export default function Theme({color}) {

    window.addEventListener("load", () => {
        if(localStorage.theme) {
            if(localStorage.theme === "dark") {
                document.documentElement.classList.add("dark")
            } else if(localStorage.theme === "light") {
                document.documentElement.classList.remove("dark")
            }

        } else {
            localStorage.setItem("theme", "light")
        }
    })

    function changetheme () {
        if(localStorage.theme === "light") {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        } else if(localStorage.theme === "dark") {

            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }
 
    
    return (
        <button className={`Theme relative w-8 h-8 pt-1 ${color} dark:text-zinc-900 hover:text-orange-500 dark:hover:text-orange-500 z-50`} onClick={changetheme}>
            <HiOutlineMoon className='moon absolute left-0 top-0 w-full h-full scale-100 dark:scale-0 dark:rotate-[360deg] transition-all duration-500'/>
            <HiOutlineSun className='sun absolute left-0 top-0 w-full h-full scale-0 dark:scale-100 dark:rotate-[360deg] transition-all duration-500'/>
        </button>
    )
}
