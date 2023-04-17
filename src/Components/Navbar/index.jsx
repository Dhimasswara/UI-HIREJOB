import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Navbar.module.css'
import { useState, useEffect } from 'react'
import { faHive } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router = useRouter();
    

    const clearLocal = () => {
        localStorage.clear()
        router.push('/')
    }

    // const [item, setItem] = useState(['']);

    // useEffect(() => {
    //     const localLength = localStorage.getItem('user');
    //     setItem(localLength);

    // }, []);

    const [login, setLogin] = useState('');
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        setLogin(localStorage.getItem('token'));
        setProfile(localStorage.getItem('id'));
    });

    return (
        <>

            {login < 1 ?
                <nav className="navbar bg-light navbar-expand-lg sticky-top">
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
                                <Link href={'/Login'} className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 ${style.btn1}`} type="button">Masuk</Link>
                                <Link href={'/Register'} className={`btn btn-outline-success me-md-2 me-0 ${style.btn1}`} type="button">Daftar</Link>
                            </div>
                        </div>

                    </div>
                </nav>
                :
                <nav className="navbar bg-body-tertiary navbar-expand-lg sticky-top">
                    <div className="container">
                        <Link className="navbar-brand" href={'/LandingPage'}>
                            <FontAwesomeIcon
                                icon={faHive}
                                style={{ marginRight: "10px", fontSize: 25, color: '#5E50A1' }}
                            />
                            <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
                        </Link>
                        <Link className='ps-5' href={'/Home'}><span className='fw-bolder'>Home</span></Link>
                        <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-brands fa-xing"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='d-grid d-lg-block ms-lg-auto mt-4 mt-md-0'>
                                <Link href={'/Login'} onClick={clearLocal} className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 ${style.btn1}`} type="button">Logout</Link>
                            </div>
                        </div>

                    </div>
                </nav>


            }
        </>
    )
}

export default Navbar