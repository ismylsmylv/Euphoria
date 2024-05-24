
import Navbar from '../../components/navbar'

import { Routes, Route, useParams } from 'react-router-dom';


const Header = () => {

  let { type } = useParams();

  return (
    <Navbar />
  )
}

export default Header;
