import React from 'react'
import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import MainProfile from '@/Components/LayoutProfile/MainProfile'
import LeftSide from '@/Components/LayoutProfile/LeftSide'
import RightSide from '@/Components/LayoutProfile/RightSide'
import style from '../Profile/style.module.css'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import InputFormEdit from '@/Components/Form/InputFormEdit'

const Hire = () => {
    return (
        <LayoutLoginProfile sty={{ backgroundColor: "#f0f0f0" }}>
            <SectionPage sty={{ marginTop: "50px", marginBottom: "50px", backgroundColor: "transparent !important" }}>
                <MainProfile>
                    <LeftSide>
                        <div className="profileDesc">
                            <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                                <Image src={img} className='img-thumbnail rounded-circle'></Image>
                            </div>
                            <h5 className='fw-bolder'>Dhimas Pandu Yogaswara</h5>
                            <span className={style.work}>Manager</span>
                            <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />Bekasi</p>
                            <span className={style.worker}>Freelancer</span>
                            <p className={style.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                        </div>
                        <div className="skills ">
                            <h5 className="fw-bolder">Skills</h5>
                            <div className="listSkills">
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                            </div>
                        </div>
                    </LeftSide>
                    <RightSide sty={{ backgroundColor: "transparent !important", boxShadow: "none !important", paddingTop: "0" }}>
                        <div className="row ">
                            <div className="col-12 col-md-11">
                                <h3 className='fw-bolder'>Hubungi Dhimas Pandu Yogaswara</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

                                <select class="form-select form-select-md mb-3" aria-label=".form-select-md example" style={{ height: "50px !important" }}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'title'} placeholder={'Masukan nama lengkap'} />

                                <div className="col-12  d-grid align-items-center">
                                    <button className='btn btn-warning' style={{ height: "50px" }}>Simpan</button>
                                </div>

                            </div>
                        </div>

                    </RightSide>
                </MainProfile>
            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default Hire