const Nav = () => {
  return (
    <nav>
      <ul className="navbar flex gap-1">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/menu">Menu</a>
        </li>
        <li className="nav-item">
          <a href="/reservation">Reservations</a>
        </li>
        <li className="nav-item">
          <a href="/orderOnline">Order Online</a>
        </li>
        <li className="nav-item">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;