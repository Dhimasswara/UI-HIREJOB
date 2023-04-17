import React, { useEffect, useState } from "react";
import LayoutPage from '../../Components/LayoutPage/LayoutPage'
import button from '../../Components/Navbar/Navbar.module.css'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import img2 from '../../Assets/Home/imgSection2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import style from './Landing.module.css'
import SlideCard from '../../Components/SlideCard'
import SectionPage from "../../Components/Section/LandingPage/SectionPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";




const LandingPage = () => {



    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (
        <LayoutPage>
            <SectionPage embedSection={style.sectionOne}>
                <div className="main container ">
                    <div className="row flex-column-reverse flex-md-row">
                        <div className={`col-md-5 col-12 d-grid align-items-center ${style.sectionOneTitle}`} data-aos="fade-right" data-aos-duration="2000">
                            <div className="row">
                                <div className="col-md-10">
                                    <h1 className="fw-bolder">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                    <Link href={'/Home'} className={`btn ${button.btn1} mt-5`} >Mulai Dari Sekarang</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-12 d-grid justify-content-md-end justify-content-center mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="2000">
                            <div className={style.imgWrapper}>
                                <div className={style.box1} />
                                <Image className={`${style.imgSection} img-fluid`} src={img} ></Image>
                            </div>

                        </div>
                    </div>
                </div>
            </SectionPage>

            <SectionPage embedSection={style.sectionTwo}>
                <div className="row ">
                    <div className="col-md-6 col-12 text-center d-grid justify-content-center" data-aos="flip-left" data-aos-duration="2000">
                        <div className={style.imgWrapper2}>
                            <div className={style.box2} />
                            <Image className={`img-fluid ${style.imgSection2}`} src={img2}></Image>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mt-4 mt-md-0 text-center text-md-start text-wrap" data-aos="flip-right" data-aos-duration="2000">
                        <h1 className="fw-bolder">Kenapa harus mencari tallent di peworld</h1>
                        <div className="row mt-4">
                            <div className="col-12">
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#6427AD' }} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#6427AD' }} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#6427AD' }} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#6427AD' }} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#6427AD' }} /> Lorem ipsum dolor sit amet. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPage>

            {/* <SectionPage embedSection={style.sectionThree}>
                <div className="row my-5 flex-column-reverse flex-md-row ">
                    <div className="col-12 col-md-6" data-aos="zoom-in" data-aos-duration="2000">
                        <h1 className="fw-bolder text-center text-md-start text-wrap">Skill Talent</h1>
                        <p className="text-center text-md-start text-wrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta modi, impedit nobis vitae commodi fuga.</p>
                        <div className="row mt-4">
                            <div className="col-6">
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Java </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Golang </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> HTML </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Javascript </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Python </p>
                            </div>
                            <div className="col-6">
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> PHP </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Ruby </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Sephire </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F1D81B' }} /> Lorem ipsum dolor sit amet. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center mb-md-0 mb-4 d-grid justify-content-center" data-aos="zoom-out" data-aos-duration="2000">
                        <div className={style.imgWrapper3}>
                            <div className={style.box3} />
                            <Image className={`${style.imgSection3} img-fluid`} src={img2}></Image>
                        </div>
                    </div>

                </div>
            </SectionPage> */}

            <SectionPage embedSection={style.sectionFour}>
                <div className="row my-5 justify-content-center align-items-center " >
                    <h1 className='text-center fw-bolder mb-5' data-aos="fade-up" data-aos-duration="2000">Their opinion about peworld</h1>
                    <div className="col-lg-12 col-md-12 col-12" data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <SlideCard />
                    </div>
                </div>
            </SectionPage>


            <SectionPage embedSection={style.sectionFive}>
                <div className="row my-5 justify-content-center d-flex align-items-center h-100 bg-i">
                    <div className="col-12">
                        <div className={style.box}>
                            <div className="row justify-content-around d-flex align-items-center h-100">
                                <div className="col-md-4 col-12 ps-5 pt-5 pt-md-0 text-light">
                                    <h4>Lorem Ipsum Dolar Sit Amet</h4>
                                </div>
                                <div className="col-md-4 col-12 ps-5 text-start pb-5 pb-md-0 text-md-end">
                                    <button className="btn btn-light">
                                        Mulai dari sekarang
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </SectionPage>
        </LayoutPage>
    )
}

export default LandingPage