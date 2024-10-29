import React, { useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import { FaXmark } from "react-icons/fa6";

import ResumFirstSlide from "../../components/ResumModal/ResumFirstSlide";

export default function ResumModal(props) {

    const [displayModal, setDisplayModal] = useState("flex")

    function closeModal() {
        setDisplayModal("hidden")
        localStorage.setItem("showModal", "fasle")
    }

    return (
        <div dir="ltr" className={`fixed ResumModal top-0 right-0 left-0 ${displayModal} justify-center items-center w-screen h-screen bg-zinc-400/40 backdrop-blur-sm z-50`}>
            <div className="relative w-auto min-w-[700px] max-w-[1000px] px-12 py-10 bg-gray-300 rounded-lg transition-[width] duration-1000">
                <button onClick={closeModal} className="absolute top-5 right-5 w-9 h-9 p-1 hover:rotate-[360deg] hover:scale-150 transition-transform duration-1000 z-50"> <FaXmark className="w-full h-full text-zinc-700 hover:text-zinc-900" /> </button>
                <Swiper 
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={ {type: "bullets", clickable: true, dynamicBullets: true} }
                    speed={1000}
                    autoplay={{delay: 5000}}
                >
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>
                    <SwiperSlide className="max-w-[1000px]"> <ResumFirstSlide /> </SwiperSlide>

                </Swiper>
                
            </div>
        </div>
    );
}
