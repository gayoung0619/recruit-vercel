import { Fragment } from "react";

const Arrow = () => {
  return(
      <Fragment>
        <svg className="mobile:hidden" width="0.8333vw" height="1.4583vw" viewBox="0 0 16 28" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L14 14L2 26" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="hidden mobile:block" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.940375 1.49561L5.06055 5.61578L0.940375 9.73595" stroke="white" strokeWidth="1.09871"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Fragment>
  )
}
export default Arrow;