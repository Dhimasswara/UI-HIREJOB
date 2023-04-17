import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import style from './editProfile.module.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPencil } from '@fortawesome/free-solid-svg-icons'
import InputFormEdit from '@/Components/Form/InputFormEdit'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import { useGetWorkerByIdQuery, useUpdateWorkerByIdMutation } from '@/features/worker/workerApi'
import { showLoading, failedLoading, successLoading } from '@/common/loadingHandler'
import Swal from 'sweetalert2'
import { useCreateSkillsMutation } from '@/features/skill/skillsApi'
import { useCreateExperienceMutation } from '@/features/experience/experienceApi'
import { useCreatePortfolioMutation } from '@/features/portfolio/portfolioApi'



const EditProfile = () => {

    const router = useRouter();
    const { id } = router.query;
    const { data: worker, isSuccess } = useGetWorkerByIdQuery(id)
    const [selectedFile, setSelectedFile] = useState();
    const [updateWorker, { isSuccess: isSuccessUpdate, isLoading, isError }] = useUpdateWorkerByIdMutation()
    const [preview, setPreview] = useState();

    // Add additional workers


    // Add Skills 

    const [createSkills, { isSuccess: skillSuccess, isError: skillError, isLoading: skillLoading }] = useCreateSkillsMutation()
    const [workerSkill, setWorkerSkill] = useState("");

    const submitSkill = (e) => {
        e.preventDefault();
        createSkills({ id, data: { name: workerSkill } })
        setWorkerSkill("")
    }

    // -----------------


    // Add Experience 

    const [createExperience, { isLoading: expSuccess, isLoading: expLoading, isError: expError }] = useCreateExperienceMutation()
    const [selectedFileExp, setSelectedFileExp] = useState();
    const [previewExp, setPreviewExp] = useState();
    const [experience, setExperience] = useState({
        company_name: "",
        date_start: "",
        date_end: "",
        jobdesk: "",
        description: "",
        image: "",
    })

    const submitExperience = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        for (let attr in experience) {
            formData.append(attr, experience[attr])
        }
        await createExperience({
            id,
            data: formData,
        });
    };

    const handleExperience = (e) => {
        setExperience(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }
    function trigerInputFileExperience(e) {
        document.querySelector(`#experience-photo`)?.click()
    }

    const selectFileExperience = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFileExp(undefined);
            return;
        }

        setSelectedFileExp(e.target.files[0]);
        setExperience((prev) => {
            return {
                ...prev,
                image: e.target.files[0],
            };
        });
    };


    useEffect(() => {
        if (!selectedFileExp) {
            setSelectedFileExp(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFileExp);
        setPreviewExp(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFileExp]);


    // -----------------


    // Add Portfolio 

    const [createPortfolio, { isSuccess: portSuccess, isLoading: portLoading, isError: portError }] = useCreatePortfolioMutation()
    const [portfolio, setPortfolio] = useState({
        name_portfolio: '',
        repo_link: '',
        type_portfolio: '',
        image: ''
    })

    console.log(portfolio?.type_portfolio);

    const changePortfolio = (e) => {
        setPortfolio(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }

    const submitPortfolio = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        for (let attr in portfolio) {
            formData.append(attr, portfolio[attr])
        }
        await createPortfolio({
            id,
            data: formData,
        });
    };


    // ------------------

    function trigerInputFile(e) {
        document.querySelector(`#user-photo`)?.click()
    }

    const [data, setData] = useState({
        name: '',
        jobdesk: '',
        address: '',
        workplace: '',
        description: '',
        image: worker?.image
    });

    const handleCancel = () => {
        setData({
            name: worker?.name,
            jobdesk: worker?.jobdesk,
            address: worker?.address,
            workplace: worker?.workplace,
            description: worker?.description,
            image: worker?.image
        })
    }

    const handleChange = (e) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }


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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        for (let attr in data) {
            formData.append(attr, data[attr]);
        }
        await updateWorker({ id, data: formData });
    }

    useEffect(() => {
        if (isSuccess) {
            setData((prev) => {
                let item = {};
                for (let attr in data) {
                    item = { ...item, [attr]: worker[attr] };
                }
                return item;
            });
        }
    }, [isSuccess]);


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


    useEffect(() => {
        if (isLoading || skillLoading || expLoading || portLoading) showLoading('Please wait...')
        if (isSuccessUpdate || skillSuccess || expSuccess || portSuccess){
            if (isSuccessUpdate) {
                Swal.fire({
                    title: 'Update success',
                    icon: 'success',
                });
            } else if (skillSuccess) {
                Swal.fire({
                    title: 'Created skill success',
                    icon: 'success',
                });
                setWorkerSkill('')
            } else if (expSuccess){
                Swal.fire({
                    title: 'Created experience success',
                    icon: 'success',
                });
                setExperience({
                    company_name: "",
                    date_start: "",
                    date_end: "",
                    jobdesk: "",
                    description: "",
                    image: "",
                })
            } else if (portSuccess){
                Swal.fire({
                    title: 'Created portfolio success',
                    icon: 'success',
                });
                setPortfolio({
                    name_portfolio: '',
                    repo_link: '',
                    type_portfolio: '',
                    image: ''
                })
            }
        }
        if (isError || skillError || expError || portError) failedLoading('Update Failed!')
    }, [isSuccessUpdate, isLoading, isError, skillError, skillSuccess, skillLoading, expSuccess, expLoading, expError, portSuccess, portLoading, portError]);


    return (
        <LayoutLoginProfile>
            <ToastContainer />
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
                                        {/* {worker?.image && */}
                                            <Image width={150} height={150} crossOrigin='anonymous' src={preview ? preview : worker?.image === null ? img : worker?.image} className={`img-thumbnail rounded-circle ${style.imgStyle}`}></Image>
                                        {/* } */}
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor='upload-photo user-photo' style={{ backgroundColor: "white", border: "none", marginTop: "10px", cursor: 'pointer' }}><FontAwesomeIcon icon={faPencil} /><span style={{ marginLeft: "10px" }}>Edit</span></label>
                                            <input type="file" id='upload-photo user-photo' name='image' hidden onChange={selectFile} onClick={trigerInputFile} />
                                        </form>
                                    </div>
                                    <h5 className='fw-bolder'>{worker?.name}</h5>
                                    {/* <span className={style.work}>{worker?.jobdesk}</span> */}
                                    <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{worker?.address}</p>
                                    <span className={style.worker}>{worker?.jobdesk}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${style.buttonLeft}`}>
                            <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                <button className={`btn mb-2 ${style.btn}`} type="button" onClick={handleSubmit}>Simpan</button>
                                <button className={`btn ${style.btn}`} onClick={handleCancel}>Batal</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-8 col-md-8 ${style.right}`}>
                        <div className="row">
                            <div className={`col-12`}>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Data Diri</h3>
                                        <hr className={style.hr} />
                                        <form onSubmit={handleSubmit}>
                                            <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'name'} placeholder={'Masukan nama lengkap'} value={data?.name} onchange={handleChange} />
                                            <InputFormEdit type={'text'} title={'Job Desk'} name={'jobdesk'} placeholder={'Jobdesk'} value={data?.jobdesk} onchange={handleChange} />
                                            <InputFormEdit type={'text'} title={'Domisili'} name={'address'} placeholder={'Domisili'} value={data?.address} onchange={handleChange} />
                                            <InputFormEdit type={'text'} title={'Tempat Kerja'} name={'workplace'} placeholder={'Tempat Kerja'} value={data?.workplace} onchange={handleChange} />
                                            <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'description'} placeholder={'Deskripsi Pekerjaan'} value={data?.description} onchange={handleChange} />
                                        </form>
                                    </div>

                                </div>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Skill</h3>
                                        <hr className={style.hr} />
                                        <form className="row" onSubmit={submitSkill}>
                                            <div className="col-12 col-md-9">
                                                <InputFormEdit type={'no-title'} name={'name'} placeholder={'Ex: Java'} value={workerSkill} onchange={(e) => setWorkerSkill(e.target.value)} />
                                            </div>
                                            <div className="col-12 col-md-3 mb-4 mb-md-0 d-grid align-items-center">
                                                <button className='btn btn-warning' style={{ height: "50px" }} type='submit'>Simpan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11 mb-5">
                                        <h3 className='pt-4'>Pengalaman Kerja</h3>
                                        <hr className={style.hr} />
                                        <form onSubmit={submitExperience}>
                                            <div className="row">
                                                <div className="col-lg-2 col-4">
                                                    <label for="formFile experience-photo" className='d-block' style={{ cursor: "pointer" }}>
                                                        <Image crossOrigin='anonymous' src={previewExp} width={100} height={100} className='rounded'></Image>
                                                    </label>
                                                    <input class="form-control d-none" type="file" id="formFile experience-photo" name='image'
                                                        onChange={selectFileExperience} onClick={trigerInputFileExperience}
                                                    ></input>
                                                </div>
                                                <div className="col-lg-10 col-8 d-grid align-items-center">
                                                    <p>Input Company Logo</p>
                                                </div>
                                            </div>
                                            <InputFormEdit type={'text'} title={'Posisi'} name={'jobdesk'} placeholder={'Web Developer'} req={'required'} value={experience?.jobdesk} onchange={handleExperience} />
                                            <InputFormEdit type={'text'} title={'Nama perusahaan'} name={'company_name'} placeholder={'PT Harus bisa'} req={'required'} value={experience?.company_name} onchange={handleExperience} />
                                            <div className="row" style={{ marginTop: "-20px", marginBottom: "-20px" }}>
                                                <div className="col-12 col-md-6 ">
                                                    <InputFormEdit type={'date'} title={'Waktu mulai'} name={'date_start'} placeholder={'Januari 2018'} req={'required'} value={experience?.date_start} onchange={handleExperience} />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <InputFormEdit type={'date'} title={'Waktu selesai'} name={'date_end'} placeholder={'Januari 2018'} req={'required'} value={experience?.date_end} onchange={handleExperience} />
                                                </div>
                                            </div>
                                            <InputFormEdit type={'textarea'} title={'Deskripsi Singkat'} name={'description'} placeholder={'Deskripsikan pekerjaan anda'} value={experience?.description} onchange={handleExperience} />
                                            <hr />
                                            <div className="button d-grid">
                                                <button type='submit' className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }}>Simpan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11 mb-5">
                                        <h3 className='pt-4'>Portofolio</h3>
                                        <hr className={style.hr} />
                                        <form onSubmit={submitPortfolio}>
                                            <InputFormEdit type={'text'} title={'Nama aplikasi'} value={portfolio?.name_portfolio} name={'name_portfolio'} placeholder={'Masukan nama aplikasi'} onchange={changePortfolio} />
                                            <InputFormEdit type={'text'} title={'Link Repository'} value={portfolio?.repo_link} name={'repo_link'} placeholder={'Masukan link repository'} onchange={changePortfolio} />
                                            <span className='d-block mb-2 text-secondary'>Type Portfolio</span>
                                            <div className={`d-md-flex d-grid d-block ${style.areaRadio}`}>
                                                <label className={`form-check-label mb-2 mb-md-0 me-md-2 me-0 ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio1">
                                                    <input className={`form-check-input ${style.radioInput}`} type="radio" name="type_portfolio" id="inlineRadio1" value="Mobile Aplication" onClick={(e) =>
                                                        setPortfolio((prev) => ({
                                                            ...prev,
                                                            type_portfolio: e.target.value,
                                                        }))
                                                    } />
                                                    <span>Aplikasi Mobile</span>
                                                </label>
                                                <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio2">
                                                    <input className={`form-check-input ${style.radioInput}`} type="radio" name="type_portfolio" id="inlineRadio2" value="Website Browser" onClick={(e) =>
                                                        setPortfolio((prev) => ({
                                                            ...prev,
                                                            type_portfolio: e.target.value,
                                                        }))
                                                    } />
                                                    <span>Website Browser</span>
                                                </label>
                                            </div>
                                            <InputFormEdit type={'file'} title={'Photo'} name={'image'} placeholder={'Photo'}
                                                onchange={(e) =>
                                                    setPortfolio((prev) => ({
                                                        ...prev,
                                                        image: e.target.files[0],
                                                    }))
                                                } />
                                            <hr />
                                            <div className="button d-grid">
                                                <button className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }} type='submit'>Simpan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`row ${style.buttonRight}`}>
                                    <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                        <button className={`btn mb-2 ${style.btn}`} onClick={handleSubmit}>Simpan</button>
                                        <button className={`btn ${style.btn}`}>Batal</button>
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

export default EditProfile