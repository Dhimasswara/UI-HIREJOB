import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from './slide.module.css'
import img from '../../Assets/Home/imgSection5.jpg'
import { getWorkers } from '@/redux/actions/workerActions'
import { useDispatch } from 'react-redux'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination } from "swiper";

export default function App() {

    const [worker, setWorker] = useState([{}])
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getWorkers(setWorker))
  }, [dispatch])

    // if(!post) return '' 

    return (
        <>
            <Swiper
                dir="rtl"
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768 : {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    "@1.50": {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                modules={[Navigation, Pagination]}
                className="mySwiper swiper-container"
            >
                {worker.map(item=> (
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className={style.card}>
                                <div>
                                    <Image crossOrigin="anonymouse" width={150} height={150} src={worker?.image} className={style.cardImg} />
                                </div>
                                <div className={`mb-5 ${style.cardTitle}`}>
                                    <h3>{item.name}</h3>
                                    <span>{item.jobdesk}</span>
                                </div>
                                <div className={style.cardContent}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>
                ))}



            </Swiper>
        </>
    );
}
