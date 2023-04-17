import React from 'react'
import img from '../../Assets/Home/imgSection5.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from '../../pages/Home/style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSkillByUser } from '@/redux/actions/skillAction'


const CardWorker = ({name, id, jabatan, address, i, photo }) => {
    const dispatch = useDispatch();
    const [skill, setSkill] = useState([{}]);

    useEffect(() => {
        dispatch(getSkillByUser(setSkill, id))
    }, [dispatch, id])
    

    return (
        <>
            <li key={id} className="list-group-item py-3">
                <div className="row">
                    <div className="col-sm-2 col-12 col-lg-2 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                        <Image className={`${style.imgCover} img-thumbnail `} crossOrigin='anonymouse' width={150} height={150} src={photo} alt=""></Image>
                    </div>
                    <div className={`col-lg-8 col-12 col-sm-10 ${style.body} text-md-start text-center`}>
                        <h4>{name}</h4>
                        <span>{jabatan === 'undefined' ? 'Position' : jabatan}</span>
                        <p><FontAwesomeIcon icon={faLocationDot} /> {address === 'undefined' ? 'Location' : address}</p>
                        <div className={`d-flex ${style.listSkills}`} key={id}>
                            {skill?.slice(0, 3).map((listskills, i) => (
                            <>
                                <p key={i} className={`btn text-nowrap me-2 ${style.skills}`}>{listskills?.name_skill}</p>                                       
                            </>
                            ))}
                         
                        </div>
                    </div>
                    <div className=" offset-sm-2 offset-lg-0 col-12 col-md-2 d-grid justify-content-md-center justify-content-center align-items-center mt-lg-0 mt-2">
                        <Link href={`/Profile/${id}`} className={`btn text-wrap  btn-block ${style.seeProfil}`}><FontAwesomeIcon icon={faEye} /> Profil</Link>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardWorker