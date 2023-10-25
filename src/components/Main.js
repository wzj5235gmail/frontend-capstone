import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/booking' Component={BookingForm} />
        <Route path='/confirm' Component={ConfirmedBooking} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main;