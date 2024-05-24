import FooterElem from "../../components/footer"

import Signin from '../../components/Sign-InPage/SignIn';
import { Routes, Route, useParams } from 'react-router-dom';
import SignUp from "../../pages/sign-up";

const Footer = () => {

  let { type } = useParams()

  return (
    <>
      {/* {type === 'sign-in' ?
        <Signin /> :
        type === 'sign-up' ?
          <SignUp />

          : <FooterElem />
      } */}
      {type = ! 'sign-in' || 'sign-up' && <FooterElem />}
    </>
  )
}

export default Footer