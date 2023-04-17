import style from './style.module.css';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuthLayout = ({ children, title, description }) => {
  return (
    <>
      <main>
        <div className={`${style.authContainer} container-fluid loginPage`}>
          <div className="row h-100 d-flex ">
            <div className={`col-md-6 ${style.sideLeft} position-sticky d-md-flex flex-column justify-content-center align-items-center d-none`}>
              <div className={style.Banner}>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className={style.FontAwesome}
                />
                <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
              </div>
              <p>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
            </div>
            <div className={`col-md-6 ${style.sideRight} pt-3 min-vh-100 text-center d-grid align-items-center`}>
              <div className="inputGroup">
                {/* <h1 className='text-warning mb- fw-bold mb-4 d-block d-lg-none'>MARKISAK.</h1> */}
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-md-10 col-sm-8 col-10">
                    <header className="text-start">
                      <h3 className="">{title}</h3>
                      <p className="mb-2">{description}</p>
                    </header>
                  </div>
                </div>
                <div className={`${style.inputField} text-start mt-4`}>
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10 col-sm-8 col-10">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
