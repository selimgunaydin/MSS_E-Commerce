import Container from "react-bootstrap/Container";
import ShowBrands from "../components/home/ShowBrands";
import Navigation from "../components/common/Navigation";

export default function About() {
  return (
    <>
      <Navigation link="Hakkımızda" />
      <Container>
        <div className="row about mb-5 pb-5">
          <div className="col-12 col-lg-6">
            <img
              className="w-100"
              src="https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/About-1.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-4">Hikayemiz</h2>
            <p className="mb-4 text-muted fw-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br />
              <br /> aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="quote d-flex justify-content-between">
              <p className="display-1 text-primary">"</p>
              <div className="pt-3 ms-3">
                <p className=" fs-5 mb-3">
                Temel ve Yaratıcı mod seçenekleri sayesinde
                istediğiniz kadar çok veya az kontrolle çarpıcı görüntüler oluşturun.
                   
                </p>
                <p className="fw-bold">SELİM GÜNAYDIN</p>
                <p className="text-muted">Developer</p>
              </div>
              <p className="display-1 text-primary">"</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="choose bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="pb-5">
              <p className="fs-2 fw-semibold text-center">Neden biz?</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="about-card col-4 d-flex flex-column align-items-center text-center bg-white p-4">
                <svg
                  fill="#EF3636"
                  height="75"
                  width="75"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512.01 512.01"
                  className="mb-3"
                >
                  <g>
                    <g>
                      <path d="M347.371,207.307l-25.6-25.6c-3.337-3.337-8.73-3.337-12.066,0l-87.834,87.834l-28.1-28.1    c-3.337-3.337-8.73-3.337-12.066,0l-25.6,25.6c-3.337,3.336-3.337,8.73,0,12.066l59.733,59.733c1.664,1.673,3.849,2.5,6.033,2.5    c2.185,0,4.369-0.836,6.033-2.5l119.467-119.467C350.708,216.037,350.708,210.644,347.371,207.307z M221.871,320.741    l-47.667-47.667l13.534-13.534l28.1,28.1c3.337,3.337,8.73,3.337,12.066,0l87.834-87.834l13.534,13.534L221.871,320.741z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M510.025,301.746l-38.11-45.739l38.11-45.739c2.125-2.543,2.577-6.084,1.178-9.079c-1.408-2.995-4.42-4.915-7.731-4.915    H391.403l-7.484-52.403c-0.597-4.207-4.198-7.33-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687    c-3.166-2.645-7.757-2.645-10.923,0l-48.828,40.687h-65.178c-4.25,0-7.842,3.123-8.448,7.322l-7.484,52.412H8.538    c-3.311,0-6.323,1.92-7.731,4.915c-1.408,3.004-0.947,6.545,1.178,9.079l38.11,45.739l-38.11,45.739    c-2.125,2.543-2.577,6.084-1.178,9.079c1.408,3.004,4.42,4.915,7.731,4.915h112.068c2.278,15.915,7.492,52.412,7.492,52.412    c0.597,4.207,4.198,7.322,8.439,7.322h65.178l48.828,40.687c1.587,1.323,3.524,1.98,5.461,1.98s3.883-0.657,5.461-1.98    l48.819-40.687c13.261,0,65.203,0.034,65.186,0c4.25,0,7.842-3.123,8.448-7.322c0,0,5.214-36.497,7.492-52.412h112.06    c3.311,0,6.323-1.92,7.731-4.915C512.611,307.821,512.15,304.28,510.025,301.746z M26.757,298.674l31.002-37.205    c2.637-3.166,2.637-7.765,0-10.923L26.757,213.34h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205H26.757z     M377.46,301.737c-0.418,0.503-0.785,1.058-1.075,1.647c-0.597,1.195-0.623,1.246-8.303,55.023    c-62.882,0-62.942,0.034-64.691,0.905c-0.589,0.299-1.143,0.657-1.647,1.075l-45.739,38.11l-45.739-38.11    c-1.527-1.28-3.465-1.98-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023c-0.299-0.589-0.657-1.143-1.075-1.647    l-38.11-45.73l38.11-45.739c1.016-1.22,1.673-2.688,1.894-4.258l7.484-52.403h60.868c1.997,0,3.925-0.7,5.461-1.98l45.739-38.11    c46.49,38.741,46.524,38.758,47.386,39.194c1.186,0.589,2.492,0.896,3.814,0.896h60.868l7.484,52.412    c0.222,1.57,0.879,3.038,1.894,4.258l38.11,45.73L377.46,301.737z M402.223,298.674l31.002-37.205    c2.637-3.166,2.637-7.765,0-10.923l-31.002-37.205h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205    H402.223z" />
                    </g>
                  </g>
                </svg>
                <p className="fw-semibold fs-4 mb-3">Ücretsiz Teslimat</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="about-card col-4 d-flex flex-column align-items-center text-center bg-white p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 1024 1024"
                  fill="#EF3636"
                  version="1.1"
                  className="mb-3"
                >
                  <path
                    d="M983.902 1023.894H40.098a7.994 7.994 0 0 1-7.998-8v-95.98c0-68.64 35.562-94.948 101.174-119.474 11.654-4.342 26.706-8.858 42.64-13.636 67.572-20.262 160.124-48.022 160.124-106.838 0-4.422 3.578-7.998 7.998-7.998s7.998 3.576 7.998 7.998c0 70.718-99.134 100.45-171.528 122.162-15.676 4.702-30.478 9.138-41.63 13.31-61.504 22.978-90.778 44.49-90.778 104.476v87.982h927.808v-87.982c0-59.986-29.276-81.498-90.792-104.476-11.138-4.172-25.95-8.61-41.618-13.31-72.39-21.712-171.528-51.444-171.528-122.162a7.994 7.994 0 0 1 7.998-7.998 7.992 7.992 0 0 1 7.998 7.998c0 58.816 92.544 86.576 160.124 106.838 15.934 4.78 30.992 9.294 42.63 13.636 65.626 24.528 101.182 50.834 101.182 119.474v95.98c0 4.422-3.578 8-7.998 8z"
                    fill=""
                  />
                  <path
                    d="M512 719.958c-109.562 0-268.006-158.608-286.152-327.058a7.99 7.99 0 0 1 7.092-8.81c4.552-0.39 8.342 2.71 8.81 7.092 8.154 75.656 46.888 155.576 106.274 219.252 53.786 57.69 116.616 93.528 163.974 93.528 51.928 0 121.724-42.836 177.854-109.134a8.044 8.044 0 0 1 11.28-0.938 8.014 8.014 0 0 1 0.938 11.28c-59.034 69.732-133.644 114.788-190.07 114.788zM741.14 543.992a7.992 7.992 0 0 1-6.92-12.012c32.54-56.058 49.722-115.516 49.722-171.95a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998c0 59.254-17.934 121.482-51.878 179.978a7.984 7.984 0 0 1-6.92 3.984z"
                    fill=""
                  />
                  <path
                    d="M344.036 694.632a7.994 7.994 0 0 1-7.998-7.998v-68.766c0-4.422 3.578-7.998 7.998-7.998s7.998 3.576 7.998 7.998v68.766a7.994 7.994 0 0 1-7.998 7.998zM679.964 687.962a7.994 7.994 0 0 1-7.998-7.998v-62.08a7.994 7.994 0 0 1 7.998-7.998 7.992 7.992 0 0 1 7.998 7.998v62.08a7.992 7.992 0 0 1-7.998 7.998zM376.02 992.462c-0.874 0-1.756-0.14-2.632-0.454a8 8 0 0 1-4.92-10.186 151.48 151.48 0 0 1 16.894-33.976c28.276-42.524 75.618-67.924 126.638-67.924 11.358 0 22.668 1.25 33.62 3.732a8.006 8.006 0 0 1 6.06 9.562c-0.968 4.31-5.28 7.044-9.56 6.03a137.668 137.668 0 0 0-30.12-3.328c-45.654 0-88.012 22.73-113.312 60.786a135.646 135.646 0 0 0-15.114 30.4 8 8 0 0 1-7.554 5.358zM647.972 992.462a8.01 8.01 0 0 1-7.56-5.358 134.146 134.146 0 0 0-15.124-30.384 137.06 137.06 0 0 0-22.62-26.166 7.986 7.986 0 0 1-0.624-11.294c2.952-3.266 8.03-3.546 11.278-0.61a153.044 153.044 0 0 1 25.308 29.198 152.962 152.962 0 0 1 16.902 33.976 8.012 8.012 0 0 1-7.56 10.638zM496.004 991.9a7.996 7.996 0 0 1-5.656-13.654l143.97-143.968a7.996 7.996 0 1 1 11.31 11.308l-143.97 143.97a7.964 7.964 0 0 1-5.654 2.344zM823.936 328.038a7.994 7.994 0 0 1-7.998-8C815.938 152.45 679.59 16.102 512 16.102S208.064 152.45 208.064 320.04c0 4.422-3.578 8-8 8a7.994 7.994 0 0 1-7.998-8C192.066 143.63 335.592 0.106 512 0.106c176.4 0 319.934 143.526 319.934 319.934a7.994 7.994 0 0 1-7.998 7.998z"
                    fill=""
                  />
                  <path
                    d="M200.064 759.95a7.994 7.994 0 0 1-7.998-8V320.04a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v431.91c0 4.422-3.578 8-8 8z"
                    fill=""
                  />
                  <path
                    d="M823.936 759.95a7.994 7.994 0 0 1-7.998-8V320.04c0-4.42 3.576-7.998 7.998-7.998s7.998 3.578 7.998 7.998v431.91c0 4.422-3.576 8-7.998 8z"
                    fill=""
                  />
                  <path
                    d="M201.682 375.864l-3.234-15.668c277.74-57.308 505.576-282.95 507.854-285.222l11.31 11.294c-2.294 2.312-233.41 231.296-515.93 289.596z"
                    fill=""
                  />
                  <path
                    d="M820.874 344.988c-149.876-54.59-259.04-137.746-260.118-138.582l9.748-12.684c1.062 0.82 108.4 82.522 255.838 136.236l-5.468 15.03z"
                    fill=""
                  />
                  <path
                    d="M603.982 607.98a8.018 8.018 0 0 1-7.938-6.984 8.002 8.002 0 0 1 6.938-8.95c1.482-0.188 149.718-19.762 184.336-84.664 10.216-19.106 9.374-39.976-2.532-63.792a8.004 8.004 0 0 1 3.578-10.732 8.012 8.012 0 0 1 10.732 3.578c14.2 28.4 14.98 54.808 2.342 78.492-38.524 72.164-190.024 92.176-196.458 92.988a7.138 7.138 0 0 1-0.998 0.064z"
                    fill=""
                  />
                  <path
                    d="M577.986 623.976c-19.058 0-33.992-10.544-33.992-23.996 0-13.45 14.934-23.994 33.992-23.994s33.992 10.544 33.992 23.994c0 13.452-14.934 23.996-33.992 23.996z m0-31.992c-11.154 0-17.996 5.17-17.996 7.996 0 2.828 6.842 8 17.996 8s17.996-5.172 17.996-8c0-2.826-6.842-7.996-17.996-7.996z"
                    fill=""
                  />
                  <path
                    d="M512 815.938c-155.264 0-195.068-81.14-196.686-84.594a7.992 7.992 0 0 1 3.85-10.636c3.976-1.876 8.734-0.156 10.616 3.826 0.398 0.812 37.938 75.406 182.22 75.406 144.876 0 176.244-74.204 176.526-74.954 1.64-4.092 6.312-6.108 10.404-4.452a8.016 8.016 0 0 1 4.468 10.388c-1.406 3.468-35.804 85.016-191.398 85.016z"
                    fill=""
                  />
                </svg>
                <p className="fw-semibold fs-4 mb-3">7/24 Destek</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="about-card col-4 d-flex flex-column align-items-center text-center bg-white p-4">
                <svg
                  fill="#EF3636"
                  height="75"
                  width="75"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  className="mb-3"
                >
                  <g>
                    <g>
                      <path d="M270.348,227.994H30.962C13.889,227.994,0,241.884,0,258.957v124.629c0,17.073,13.889,30.962,30.962,30.962h194.172    c4.736,0,8.575-3.839,8.575-8.575c0-4.736-3.839-8.575-8.575-8.575H30.962c-7.617,0-13.812-6.196-13.812-13.812v-61.331H284.16    v61.331c0,7.617-6.196,13.812-13.812,13.812h-16.632c-4.736,0-8.575,3.839-8.575,8.575c0,4.736,3.839,8.575,8.575,8.575h16.632    c17.073,0,30.962-13.889,30.962-30.962V258.957C301.31,241.884,287.421,227.994,270.348,227.994z M284.161,305.105H17.15v-22.924    h51.353c4.736,0,8.575-3.839,8.575-8.575s-3.839-8.575-8.575-8.575H17.15v-6.074c0-7.617,6.196-13.812,13.812-13.812h239.386    c7.617,0,13.812,6.196,13.812,13.812v6.074H97.085c-4.736,0-8.575,3.839-8.575,8.575s3.839,8.575,8.575,8.575h187.077V305.105z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M368.047,97.452H108.154c-4.736,0-8.575,3.839-8.575,8.575v100.177c0,4.736,3.839,8.575,8.575,8.575    c4.736,0,8.575-3.839,8.575-8.575v-39.387c27.007-3.792,48.425-25.209,52.216-52.216h199.102c4.736,0,8.575-3.839,8.575-8.575    C376.621,101.291,372.782,97.452,368.047,97.452z M116.729,149.438v-34.836h34.836    C148.108,132.136,134.264,145.98,116.729,149.438z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M503.425,97.452H396.63c-4.736,0-8.575,3.839-8.575,8.575c0,4.736,3.839,8.575,8.575,8.575h46.017    c3.791,27.006,25.203,48.424,52.204,52.216v71.5c-27.001,3.792-48.413,25.21-52.204,52.216H323.095    c-4.736,0-8.575,3.839-8.575,8.575c0,4.736,3.839,8.575,8.575,8.575h180.33c4.736,0,8.575-3.839,8.575-8.575V106.027    C512,101.291,508.161,97.452,503.425,97.452z M494.85,149.437c-17.529-3.458-31.369-17.302-34.825-34.835h34.825V149.437z     M494.85,290.533h-34.825c3.456-17.534,17.296-31.378,34.825-34.836V290.533z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M305.79,141.389c-43.52,0-78.927,27.442-78.927,61.171c0,1.434,0.07,2.921,0.206,4.42    c0.429,4.716,4.601,8.186,9.317,7.763c4.716-0.429,8.192-4.601,7.763-9.317c-0.09-0.984-0.135-1.949-0.135-2.866    c0-24.273,27.713-44.022,61.777-44.022c34.07,0,61.789,19.748,61.789,44.022c-0.002,19.932-18.949,37.438-46.079,42.569    c-4.653,0.88-7.712,5.366-6.831,10.019c0.779,4.115,4.375,6.982,8.416,6.982c0.528,0,1.066-0.049,1.603-0.151    c35.35-6.687,60.039-31.121,60.039-59.419C384.729,168.831,349.317,141.389,305.79,141.389z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M93.582,339.714H38.935c-4.736,0-8.575,3.839-8.575,8.575c0,4.736,3.839,8.575,8.575,8.575h54.647    c4.736,0,8.575-3.839,8.575-8.575C102.156,343.554,98.317,339.714,93.582,339.714z" />
                    </g>
                  </g>
                </svg>
                <p className="fw-semibold fs-4 mb-3">Güvenli Ödeme</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowBrands />
    </>
  );
}
