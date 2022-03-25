import React, {useEffect} from 'react';

const Auth = ({displayOff}) => {
  useEffect(()=>{
    displayOff();
  },[])

  return <>
    <div className="bg-light ">
      <div className="row ">
        <div className="pt-0 col-md-12"></div>
      </div>
    </div>
    인증
  </>;
};

export default Auth;