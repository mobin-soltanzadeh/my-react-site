import React from "react";

import LanguageIcon from '@mui/icons-material/Language';

export default function LangBtn({lang, changeLang, color="text-neutral-500", darkColor="dark:text-neutral-500"}) {
    return (
        <div onClick={changeLang} className={`LangBtn relative flex justify-center items-center text-center ${color} ${darkColor} hover:text-orange-500 dark:hover:text-orange-500 cursor-pointer z-50 transition-all duration-500`}>
            <LanguageIcon  className="w-7 h-7" />
            <span className="text-xl font-semibold">{lang}</span>
        </div>
    );
}
