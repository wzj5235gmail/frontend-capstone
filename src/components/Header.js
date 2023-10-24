import Nav from './Nav';
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className='header flex gap1'>
      <a href="/">
        <img src={logo} alt="logo" height={55}/>
      </a>
      <Nav />
    </header>
  )
}

export default Header;