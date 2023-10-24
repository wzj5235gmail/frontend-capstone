import heroPic from '../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <div className="hero flex">
      <div className="hero-content flex">
        <div className='left flex'>
          <div className='words'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Savor delightful flavors at Little Lemon Restaurant! Indulge in fresh, vibrant dishes that will tickle your taste buds and brighten your day. Join us today!</p>
          </div>
          <div className='button'>
            <a href="/booking">Reserve a table</a>
          </div>
        </div>
        <img src={heroPic} alt="restaurant food" height={300} width={300} />
      </div>
    </div>
  )
}

export default Hero;