import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingForm from "./BookingForm";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/booking' Component={BookingForm} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main;