import { faMailBulk, faBell, faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import img from '../../Assets/Home/imgSection2.png'
import { useState, useEffect } from 'react'
import { faHive } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useGetRecruiterProfileQuery } from '@/features/auth/Recruiter/authApi'
import { useGetWorkerProfileQuery } from '@/features/auth/Worker/authApi'

const NavbarProfile = () => {
    
    const router = useRouter();
    const [login, setLogin] = useState('');
    const [profile, setProfile] = useState([]);
    const [role, setRole] = useState('')
    const id = profile;

    const {data : recruiter} = useGetRecruiterProfileQuery()
    const {data : worker} = useGetWorkerProfileQuery()
    
    useEffect(() => {
        setLogin(localStorage.getItem('token'));
        setProfile(localStorage.getItem('id'));
        setRole(localStorage.getItem('role'));
    });

    const clearLocal = () => {
        localStorage.clear()
        router.push('/')
    }

    return (
        <>

            {login < 1 ?
                <nav className="navbar bg-light shadow navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href={'/LandingPage'}>
                            <FontAwesomeIcon
                                icon={faHive}
                                style={{ marginRight: "10px", fontSize: 25, color: '#5E50A1' }}
                            />
                            <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
                        </Link>
                        <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-brands fa-xing"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='d-grid d-lg-block ms-lg-auto mt-4 mt-md-0'>
                                <Link href={'/auth/Login'} className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 ${style.btn1}`} type="button">Masuk</Link>
                                <Link href={'/auth/Register'} className={`btn btn-outline-success me-md-2 me-0 ${style.btn1}`} type="button">Daftar</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                :

                <nav className="navbar bg-light navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href={'/'}>
                            <FontAwesomeIcon
                                icon={faHive}
                                style={{ marginRight: "10px", fontSize: 25, color: '#5E50A1' }}
                            />
                            <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
                        </Link>
                        <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-brands fa-xing"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='ms-lg-auto mt-4 mt-md-0 d-flex justify-content-center justify-content-md-end'>
                                <button className={`me-5 ${style.message}`}><FontAwesomeIcon icon={faMailBulk} /> </button>
                                <button className={`me-5 ${style.notif}`}><FontAwesomeIcon icon={faBell} /> </button>
                                <div className="btn-group dropdown-center">
                                        {role === 'recruiter' ? 
                                            <Link href={`/CompanyProfile/${profile}`} className={style.profile}>
                                                <Image className={`${style.img} img-fluid`} src={recruiter?.image === null || undefined || worker?.image === null || undefined ? img : recruiter?.image || worker?.image} crossOrigin='anonymous' width={40} height={40}/>
                                            </Link> :
                                            <Link href={`/Profile/${profile}`} className={style.profile}>
                                                <Image className={`${style.img} img-fluid`} src={recruiter?.image === null || undefined || worker?.image === null || undefined ? img : recruiter?.image || worker?.image} crossOrigin='anonymous' width={40} height={40}/>
                                            </Link> 
                                        }
                                        <button type="button" className={`dropdown-toggle  dropdown-toggle-split ${style['dropdown-toggle-split']} ${style.toggleSplit}`} data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                    <ul className={`dropdown-menu dropdown-menu-end ${style.drop}`}>
                                        <li><Link className="dropdown-item" href={'/auth/Login'} onClick={clearLocal}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link></li>
                                        {role === 'recruiter' ?
                                        <li><Link className="dropdown-item" href={`/EditRecruiter/${profile}`}><FontAwesomeIcon icon={faGear} /> Edit Profile</Link></li>
                                        : 
                                        <li><Link className="dropdown-item" href={`/EditWorker/${profile}`}><FontAwesomeIcon icon={faGear} /> Edit Profile</Link></li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


            }
        </>
    )
}

export default NavbarProfile