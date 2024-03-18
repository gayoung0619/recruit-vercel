import { Fragment } from "react";

const Close = () => {
  return(
    <Fragment>
      <svg className="mobile:hidden" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="8.30305" y1="7.69683" x2="32.3032" y2="31.6969" stroke="#242628" stroke-width="0.857147"/>
        <line x1="32.3021" y1="8.30293" x2="8.30196" y2="32.303" stroke="#242628" stroke-width="0.857147"/>
      </svg>
      <svg className="hidden mobile:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5.15336" y1="4.44637" x2="19.5534" y2="18.8464" stroke="#242628"/>
        <line x1="19.5528" y1="5.15348" x2="5.15271" y2="19.5535" stroke="#242628"/>
      </svg>
    </Fragment>
  )
}
export default Close;