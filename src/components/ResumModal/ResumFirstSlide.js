import React from "react";

export default function ResumFirstSlide() {
    return (
        <div className="flex flex-col gap-y-8 mt-20 overflow-hidden">
            <h1 className="text-6xl">Profile</h1>

            {/* <span className="w-full h-[3px] bg-gray-400 rounded-full"></span> */}

            <div className="flex">
                <div className="w-1/2 flex flex-col pr-14">
                    <h1 className="text-3xl text-emerald-400 mb-4">About me</h1>
                    <div className="text-xl mb-4">I am a Junior web developer with good knowledge of front-end development. I love discipline and i also stand for quality. I love spending time on finding little details and optimizing web apps. Also i like working in a team</div>
                    <div className="text-xl">As the saying goes :</div>
                    <div className="text-xl">two heads are better than one</div>
                </div>

                <div className="w-1/2 pl-14">
                    <h1 className="text-3xl text-emerald-400 mb-4">Detail</h1>
                    <span className="text-xl font-semibold">Name:</span>
                    <p className="mb-5">Mobin Soltanzadeh</p>

                    <span className="text-xl font-semibold">Age:</span>
                    <p className="mb-5">21</p>

                    <span className="text-xl font-semibold">Location:</span>
                    <p className="mb-5">Iran, Mashhad</p>

                    <span className="text-xl font-semibold">Education:</span>
                    <p className="mb-5">Computer Engineering</p>
                </div>
            </div>
        </div>
    );
}
