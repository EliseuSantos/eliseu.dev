"use client";

import {skills} from "@/src/staticData/home/home";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRef, useState} from "react";
import SectionHeading from "../shared/SectionHeading";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import Image from "next/image";

const Skills = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

    const navigateToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const navigateToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleSlideChange = (swiper) => {
        const realIndex =
            swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
        setActiveSlide(realIndex);
    };

    return (
        <div
            data-scroll-index="3"
            id="skill"
            className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        >
            <div
                className="relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <SectionHeading {...skills?.skillsHeading} />

                <div className="mt-12 skills-slider xl:mt-16">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <Swiper
                                breakpoints={{
                                    342: {
                                        slidesPerView: 2,
                                    },
                                    600: {
                                        slidesPerView: 3,
                                    },
                                    800: {
                                        slidesPerView: 4,
                                    },
                                }}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                className={`skillsCircleSlider`}
                                style={{padding: "0 10px"}}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    stopOnLastSlide: false,
                                    waitForTransition: false,
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                onSlideChange={handleSlideChange}
                            >
                                {skills?.skillsData?.map((skill, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="space-y-5 text-center swiper-slide">
                                            <Image src={skill?.image} width={60} height={60} alt={skill?.name}/>
                                            <div className="text-black dark:text-white name">
                                                {skill?.name}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div
                    className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 md:absolute md:top-16 lg:top-20 md:right-8 lg:right-13">
                    <button
                        className="group transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                        aria-label="Previous"
                        onClick={navigateToPreviousSlide}
                    >
                        <BsArrowLeft size={18} className="group-hover:text-white"/>
                    </button>
                    <div className="text-sm font-light text-center text-black dark:text-white counter w-7">
                        {activeSlide + 1}/{skills?.skillsData?.length}
                    </div>
                    <button
                        className="group transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                        aria-label="Next"
                        onClick={navigateToNextSlide}
                    >
                        <BsArrowRight size={18} className="group-hover:text-white"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Skills;
