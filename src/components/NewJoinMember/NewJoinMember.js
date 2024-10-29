import React from "react";

import UserImage from "../UserImage/UserImage"

import { IoEye, IoEyeOff } from "react-icons/io5";


export default function NewJoinMember({imgSrc, name, job}) {
    
    return (
        <div className="NewJoinMember flex justify-between items-center w-full">
            <UserImage w={64} h={64} imgSrc={imgSrc} imgAlt={"user-img"} />

            <div className="basis-1/3 text-start flex flex-col justify-center items-start">
                <span>{name}</span>
                <span>{job}</span>
            </div>

            <button dir="ltr" className="text-start flex justify-center items-center gap-x-1.5 px-3 py-1 bg-blue-400/40 rounded-lg">
                <IoEye />
                <span>Display</span>
            </button>
        </div>
    );
}
