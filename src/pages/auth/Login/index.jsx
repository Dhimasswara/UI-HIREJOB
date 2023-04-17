import InputFormAuth from '@/Components/Form/InputFormAuth';
import Link from 'next/link';
import style from '../../../Components/LayoutAuth/style.module.css'
import LayoutAuth from '@/Components/LayoutAuth';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch } from 'react-redux';
import { useWorkerLoginMutation } from '@/features/auth/Worker/authApi';
import { useRecruiterLoginMutation } from '@/features/auth/Recruiter/authApi';
import { showLoading } from '@/common/loadingHandler';
import { setCredentials } from '@/app/api/authSlice';

const Login = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const [workerLogin, { isLoading, isSuccess, isError, error }] = useWorkerLoginMutation()
  const [recruiterLogin, { isLoading: isLoadingRecruiter, isSuccess: isSuccessRecruiter, isError : isErrorRecruiter, error : errorRecruiter}] = useRecruiterLoginMutation()
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const directPath = () => {
    return router.push('/')
  }

  const workerHandler = async (e) => {
    e.preventDefault();
    const res = await workerLogin(data);
    dispatch(setCredentials({ user: res?.data?.data, token: res?.data?.token, role: res?.data?.role, idUser: res?.data?.id_worker }));
  };

  const recruiterHandler = async (e) => {
    e.preventDefault();
    const res = await recruiterLogin(data);
    dispatch(setCredentials({ user: res?.data?.data, token: res?.data?.token, role: res?.data?.role, idUser: res?.data?.id_recruiter }));
    // console.log(setCredentials.id_recruiter);
  };

  useEffect(() => {
    if (isLoading) {
      showLoading('Please Wait...')
    }

    if (isError) {
      Swal.close();
      setData((prev) => {
        return {
          ...prev,
          password: "",
        };
      });
    }
    if (isSuccess) {
      Swal.close();
      directPath();
    }
  }, [isLoading, isSuccess, isError]);

  useEffect(() => {
    if (isLoadingRecruiter) {
      showLoading('Please Wait...')
    }
    if (isErrorRecruiter) {
      Swal.close();
      setData((prev) => {
        return {
          ...prev,
          password: "",
        };
      });
    }
    if (isSuccessRecruiter) {
      Swal.close();
      directPath();
    }
  }, [isLoadingRecruiter, isSuccessRecruiter, isErrorRecruiter]);

  return (
    <LayoutAuth title="Welcome" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.">

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Worker">
          {error && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {error?.data?.message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <form onSubmit={workerHandler}>
            <InputFormAuth title="Email" name="email" value={data.email} type="email" onchange={changeHandler} />
            <InputFormAuth title="Password" name="password" value={data.password} type="password" onchange={changeHandler} />

            <div className="d-grid mb-2 mt-3 text-light">
              <button className={`btn ${style.btn} text-light`} type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="forgotPassword text-end mb-3">
            <Link to={'/forgot-password'} className={`link-dark text-decoration-none ${style.formLabel}`} style={{ fontSize: '14px' }} href="">
              Forgot Password?
            </Link>
          </div>
          <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
            <p>
              Don’t have an account?{' '}
              <Link href={'/auth/Register'} style={{ textDecoration: 'none', color: 'rgb(88, 85, 173)' }}>
                {' '}
                Sign Up
              </Link>
            </p>
          </div>
        </Tab>

        <Tab eventKey="profile" title="Recruiter">
          {errorRecruiter && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {errorRecruiter?.data?.message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <form onSubmit={recruiterHandler}>
            <InputFormAuth title="Email" name="email" value={data.email} type="email" onchange={changeHandler} />
            <InputFormAuth title="Password" name="password" value={data.password} type="password" onchange={changeHandler} />

            <div className="d-grid mb-2 mt-3 text-light">
              <button className={`btn ${style.btn} text-light`} type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="forgotPassword text-end mb-3">
            <Link to={'/forgot-password'} className={`link-dark text-decoration-none ${style.formLabel}`} style={{ fontSize: '14px' }} href="">
              Forgot Password?
            </Link>
          </div>
          <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
            <p>
              Don’t have an account?{' '}
              <Link href={'/auth/Register'} style={{ textDecoration: 'none', color: 'rgb(88, 85, 173)' }}>
                {' '}
                Sign Up
              </Link>
            </p>
          </div>
        </Tab>
      </Tabs>

    </LayoutAuth>
  );
};

export default Login;
