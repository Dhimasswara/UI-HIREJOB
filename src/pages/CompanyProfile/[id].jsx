import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import React from 'react'
import style from './company.module.css'
import background from '../../Assets/CompanyProfile/background.jpg'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useGetRecruiterByIdQuery } from '@/features/recruiter/recruiterApi'
import { useRouter } from 'next/router'


const CompanyProfile = () => {
    const router = useRouter()
    const {id} = router.query
    const {data: recruiter } = useGetRecruiterByIdQuery(id)

    return (
        <LayoutLoginProfile>
            <SectionPage sty={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className={`box ${style.box}`}>
                    <div className="row justify-content-center">
                        <div className={`col-11 ${style.colRow}`}>
                            <div className="coverImage position-relative">
                                <Image src={background} className={`position-relative ${style.imgBackground}`}  ></Image>
                                <Image src={img} className={`img-fluid ${style.img}`}></Image>
                                <span href={''} className={`${style.bottomEdit} fw-bolder text-light pe-4 pb-2 position-absolute end-0`} onClick={''}>Edit Background</span>
                            </div>
                            <div className="box-content text-center">
                                <h2>{recruiter?.company_name}</h2>
                                <p>{recruiter?.job_field}</p>
                                <p className='text-secondary'><FontAwesomeIcon icon={faLocationDot} className='pe-1'/>{recruiter?.city}</p>
                                <p className='px-5'>{recruiter?.description_company}</p>
                                <div className="row justify-content-center text-start ">
                                    <div className="col-6 col-md-3 d-grid text-center mb-4">
                                        <div className="button d-grid">
                                        <button className='btn btn-primary' style={{height: '50px', backgroundColor: '#5E50A1', borderColor: '#5E50A1'}}>Edit Profile</button>
                                        </div>
                                    </div>
                                    <div className="col-12 d-grid justify-content-center mb-5">
                                        <p><FontAwesomeIcon icon={faInstagram} /> {recruiter?.instagram}</p>
                                        <p><FontAwesomeIcon icon={faLinkedin} /> {recruiter?.linkedin}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default CompanyProfile