import React from "react";

export default function Main() {
    return (
        <main className="Main relative flex flex-col justify-center items-center w-full px-48 py-28">
            <img className='w-full' src={require("../../data/images/team.png")} alt="" />
            {/* <p className="absolute top-32 right-64 text-5xl font-mangiola">Success together</p> */}
        </main>
    );
}
