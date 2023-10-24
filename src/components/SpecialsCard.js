const SpecialsCard = ({ foodPic, foodName, price, description }) => {
  return (
    <div className="specials-card flex">
      <img src={foodPic} alt="greek salad" height={185} width={265}/>
      <div className="words flex">
        <div className="name-price flex">
          <h3>{foodName}</h3>
          <span>${price}</span>
        </div>
        <p>{description}</p>
          <a href="#">Order a delivery</a>
      </div>
    </div>
  )
}

export default SpecialsCard;