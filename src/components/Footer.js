import logo from "../assets/Logo-2.png";


const Footer = () => {
  return (
    <footer className="footer-container flex">

      <div className="footer flex">

      <img src={logo} alt="logo" height={150} />

      <div className="links flex">

        <nav className="doormat-nav">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservations</a>
            </li>
            <li>
              <a href="/orderOnline">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>

        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="/contact/address">Address</a>
            </li>
            <li>
              <a href="/contact/phone">Phone Number</a>
            </li>
            <li>
              <a href="/contact/email">Email</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;