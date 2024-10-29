import React from "react";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

export default function FeatureItem({title, amount, amountDrop, desc}) {

    function withSign(number) {
        return (number>0 ? `+${number}`: number)
    }

    return (
        <div className="FeatureItem flex w-full flex-col justify-center items-start gap-y-3 lg:gap-y-6 p-6 text-base md:text-lg base:text-xl lg:text-3xl border shadow-md rounded-lg">
            <h1 >{title}</h1>

            <div className="flex justify-center items-center gap-x-8">
                <div className="text-2xl md:3xl lg:text-5xl">
                    <span>${amount}</span>
                </div>
                
                <div dir="ltr" className="flex items-center justify-center text-base md:text-xl lg:text-2xl font-serif">
                    <span>{withSign(amountDrop)}</span>
                    {
                        amountDrop>0 ? 
                        <IoArrowUp className="text-emerald-600 text-base md:text-xl lg:text-3xl pt-1" /> :
                        <IoArrowDown className="text-rose-600 text-base md:text-xl lg:text-3xl pt-1" />
                    }
                </div>
            </div>

            <p>{desc}</p>
        </div>
    );
}
