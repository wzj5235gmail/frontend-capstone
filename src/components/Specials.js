import SpecialsCard from "./SpecialsCard";
import greekSalad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemon dessert.jpg"

const Specials = () => {
  return (
    <div className="specials flex">
      <div className="top flex">
        <h1>This Week's Sepcials!</h1>
        <button type="button">Online Menu</button>
      </div>
      <div className="cards flex">
        <SpecialsCard foodPic={greekSalad} foodName={'Greek Salad'} price={'12.99'} description={
          'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
        } />
        <SpecialsCard foodPic={bruchetta} foodName={'Bruchetta'} price={'5.99'} description={
          'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
        } />
        <SpecialsCard foodPic={lemonDessert} foodName={'Lemon Dessert'} price={'5.00'} description={
          'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        } />
      </div>
    </div>
  )
}

export default Specials;