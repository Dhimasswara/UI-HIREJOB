import InputFormAuth from "@/Components/Form/InputFormAuth";
import Link from "next/link";
import style from '../../../Components/LayoutAuth/style.module.css'
import AuthLayout from "@/Components/LayoutAuth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRecruiterRegisterMutation } from "@/features/auth/Recruiter/authApi";
import { showLoading, failedLoading } from "@/common/loadingHandler";
import Swal from "sweetalert2";
import { useWorkerRegisterMutation } from "@/features/auth/Worker/authApi";

const Register = () => {

  const router = useRouter();
  const [recruiterRegister, { isLoading, isSuccess, isError, error }] = useRecruiterRegisterMutation()
  const [workerRegister, { isLoading: load, isSuccess: succ, isError: err, error: ror }] = useWorkerRegisterMutation()
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [data, setData] = useState({
    name: '',
    email: '',
    company_name: '',
    position: '',
    password: '',
    phone: '',
  })

  function directPath() {
    return router.push('/auth/Login')
  }

  const changeHandler = (e) => {
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const recruiterHandler = async (e) => {
    e.preventDefault();

    if (data.password != passwordConfirmation) {
      failedLoading("Password Doesn't Match!")
    } else {
      await recruiterRegister({ ...data })
    }
  }

  const workerHandler = async (e) => {
    e.preventDefault();

    if (data.password != passwordConfirmation) {
      failedLoading("Password Doesn't Match!")
    } else {
      await workerRegister({ ...data })
    }
  }

  useEffect(() => {
    if (isLoading || load) {
      showLoading('Please Wait....')
    }

    if (isSuccess || succ) {
      toast.success('Success Registration !', {
        position: toast.POSITION.TOP_RIGHT
      });
      Swal.close()
      setPasswordConfirmation('')
      setData({
        name: '',
        email: '',
        company_name: '',
        position: '',
        password: '',
        phone: '',
      })
      directPath();
    }

    if (isError || err) {
      failedLoading(ror?.data?.message)
      setPasswordConfirmation('')
      setData(prev => {
        return {
          ...prev,
          password: ''
        }
      })
    }

  }, [isLoading, isSuccess, isError, load, err, ror, succ])

  return (
    <AuthLayout title="Halo, Pewpeople!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.">

      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Worker">
          <form onSubmit={workerHandler}>
            <InputFormAuth title="Name" name="name" value={data.name} type="text" onchange={changeHandler} req={'required'}/>
            <InputFormAuth title="Email Address" value={data.email} name="email" type="text" onchange={changeHandler} req={'required'} />
            <InputFormAuth title="No Handphone" value={data.phone_number} name="phone" type="number" onchange={changeHandler} />
            <InputFormAuth title="Password" name="password" value={data.password} type="password" onchange={changeHandler} req={'required'}/>
            <InputFormAuth title="Confirm Password" name="confirmPassword" type="password" onchange={(e) => setPasswordConfirmation(e.target.value)} req={'required'}/>

            <div className="d-grid mb-2 mt-3">
              <button className={`btn ${style.btn} text-light`} type="submit" /* disabled={!(checkTerms && data.name && data.email && data.password && data.phone_number)} */>
                Register
              </button>

            </div>

          </form>
          <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
            <p>
              Already have account?{' '}
              <Link href={'/auth/Login'} style={{ textDecoration: 'none', color: 'rgb(239, 200, 26)' }}>
                {' '}
                Log in Here
              </Link>
            </p>
          </div>
        </Tab>

        <Tab eventKey="profile" title="Recruiter">
          <form onSubmit={recruiterHandler}>
            <InputFormAuth title="Name" name="name" value={data.name} type="text" onchange={changeHandler} req={'required'} />
            <InputFormAuth title="Email Address" value={data.email} name="email" type="text" onchange={changeHandler} req={'required'} />
            <InputFormAuth title="Perusahaan" value={data.perusahaan} name="company_name" type="text" onchange={changeHandler} />
            <InputFormAuth title="Jabatan" value={data.jabatan} name="position" type="text" onchange={changeHandler} />
            <InputFormAuth title="No Handphone" value={data.phone_number} name="phone" type="number" onchange={changeHandler} />
            <InputFormAuth title="Password" name="password" value={data.password} type="password" onchange={changeHandler} req={'required'} />
            <InputFormAuth title="Confirm Password" name="confirmPassword" type="password" onchange={(e) => setPasswordConfirmation(e.target.value)} req={'required'} />

            <div className="d-grid mb-2 mt-3">
              <button className={`btn ${style.btn} text-light`} type="submit" /* disabled={!(checkTerms && data.name && data.email && data.password && data.phone_number)} */>
                Register
              </button>

            </div>

          </form>
          <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
            <p>
              Already have account?{' '}
              <Link href={'/auth/Login'} style={{ textDecoration: 'none', color: 'rgb(239, 200, 26)' }}>
                {' '}
                Log in Here
              </Link>
            </p>
          </div>
        </Tab>

      </Tabs>

      <ToastContainer />
    </AuthLayout>
  );
};

export default Register
