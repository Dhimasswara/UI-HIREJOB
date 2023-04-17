import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import style from '../EditWorker/editProfile.module.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPencil } from '@fortawesome/free-solid-svg-icons'
import InputFormEdit from '@/Components/Form/InputFormEdit'
import { useGetRecruiterByIdQuery, useUpdateRecruiterByIdMutation } from '@/features/recruiter/recruiterApi'
import { useRouter } from 'next/router'
import { failedLoading, showLoading } from '@/common/loadingHandler'
import Swal from 'sweetalert2'


const EditRecruiter = () => {

    const router = useRouter()
    const { id } = router.query;
    const {data: recruiter, isSuccess: isSuccessGetRecruiter} = useGetRecruiterByIdQuery(id)
    const [updateRecruiter, {isSuccess, isLoading, isError} ] = useUpdateRecruiterByIdMutation()
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const [data, setData] = useState({
        name: '',
        phone: '',
        position: '',
        job_field: '',
        city: '',
        description_company: '',
        email: '',
        instagram: '',
        linkedin: '',
        company_name: '',
        image: recruiter?.image
    })
    const changeHandler = (e) => {
        setData(prev => {
            return {
            ...prev, 
            [e.target.name] : e.target.value,
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        for (let attr in data) {
            formData.append(attr, data[attr]);
        }
        await updateRecruiter({ id, data: formData });
    }

    useEffect(() => {
        if (isSuccessGetRecruiter) {
            setData((prev) => {
                let item = {};
                for (let attr in data) {
                    item = { ...item, [attr]: recruiter[attr] };
                }
                return item;
            });
        }
    }, [isSuccessGetRecruiter]);

    
    const selectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
        setData((prev) => {
            return {
                ...prev,
                image: e.target.files[0],
            };
        });
    };

    useEffect(() => {
        if (!selectedFile) {
            setSelectedFile(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    function trigerInputFile(e) {
        document.querySelector(`#user-photo`)?.click()
    }

    useEffect(()=> {
        if(isLoading) return showLoading('Please wait...');
        if(isSuccess) {
            Swal.fire({
                title: 'Success Updated Profile',
                icon: 'success'
            })
        }
        
        if(isError) return failedLoading('Update Failed')
    },[isSuccess, isLoading, isError])

    return (
        <LayoutLoginProfile>
            <div className={`${style.strapBrand} `}>
                <p className='container'></p>
            </div>
            <SectionPage embedSection={style.sectionProfile}>
                <div className="row justify-content-between">
                    <div className={`col-10 col-md-3 ${style.left} sticky-md-top`} style={{ top: "30px" }}>
                        <div className={`row`}>
                            <div className={`col-12 ${style.rowOneLeft}`}>
                                <div className="profileDesc">
                                    <div className={` mx-auto pb-4 pt-2 d-flex flex-column align-items-center justify-content-center ${style.picture}`}>
                                        <Image width={150} height={150} crossOrigin='anonymous' src={preview ? preview : recruiter?.image === null ? img : recruiter?.image} className={`img-thumbnail rounded-circle ${style.imgStyle}`}></Image>
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor='upload-photo user-photo' style={{ backgroundColor: "white", border: "none", marginTop: "10px", cursor: 'pointer' }}><FontAwesomeIcon icon={faPencil} /><span style={{ marginLeft: "10px" }}>Edit</span></label>
                                            <input type="file" id='upload-photo user-photo' name='image' hidden onChange={selectFile} onClick={trigerInputFile} />
                                        </form>
                                    </div>
                                    <h5 className='fw-bolder'>{recruiter?.company_name}</h5>
                                    <span className={style.work}>{recruiter?.position}</span>
                                    <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{recruiter?.city === null ? 'Location' : recruiter?.city} </p>
                                    <span className={style.worker}>{recruiter?.job_field}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row d-md-block d-none">
                            <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                <button className={`btn mb-2 ${style.btn}`} onClick={handleSubmit}>Simpan</button>
                                <button className={`btn ${style.btn}`}>Batal</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-8 col-md-8 ${style.right}`}>
                        <div className="row">
                            <div className={`col-12`}>
                                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Profile</h3>
                                        <hr className={style.hr} />
                                        <InputFormEdit type={'text'} title={'Name'} name={'name'} placeholder={'Robertson Andres'} className="mb-0" value={data?.name} onchange={changeHandler} />
                                        <InputFormEdit type={'text'} title={'Company Name'} name={'company_name'} placeholder={'PT. Goto'} className="mb-0" value={data?.company_name} onchange={changeHandler} />
                                        <InputFormEdit type={'text'} title={'Position'} name={'position'} placeholder={'HRD'} value={data?.position} onchange={changeHandler}/>
                                        <InputFormEdit type={'text'} title={'City'} name={'city'} placeholder={'Jakarta'} value={data?.city} onchange={changeHandler} />
                                        <InputFormEdit type={'text'} title={'Job Field'} name={'job_field'} placeholder={'Assurance'} value={data?.job_field} onchange={changeHandler}/>
                                        <InputFormEdit type={'text'} title={'Email'} name={'email'} placeholder={'global@gmail.com'} value={data?.email} onchange={changeHandler}/>
                                        <InputFormEdit type={'text'} title={'Phone'} name={'phone'} placeholder={'+628'} value={data?.phone} onchange={changeHandler}/>
                                        <InputFormEdit type={'text'} title={'Instagram'} name={'instagram'} placeholder={'global'} value={data?.instagram} onchange={changeHandler}/>
                                        <InputFormEdit type={'text'} title={'Linkedin'} name={'linkedin'} placeholder={'global/linkedin.com'} value={data?.linkedin} onchange={changeHandler}/>
                                        <InputFormEdit type={'textarea'} title={'Description'} name={'description_company'} placeholder={'This a big company in Jakarta, work on IT'} value={data?.description_company} onchange={changeHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-md-none d-block">
                            <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                <button className={`btn mb-2 ${style.btn}`} onClick={handleSubmit}>Simpan</button>
                                <button className={`btn ${style.btn}`}>Batal</button>
                            </div>
                        </div>
                    </div>
                </div>



            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default EditRecruiter