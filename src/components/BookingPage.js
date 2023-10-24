import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [diners, setDiners] = useState('');

  const handleFieldChange = (e, f) => {
    f(e.target.value);
  }

  const handleSubmit = () => {

  }
  
  const handleReset = () => {
    setDate('');
    setTime('');
    setDiners('');
  }

  return (
    <div className="booking">
      <Header />
      <div className="cover flex column">
        <h1>Reserve A Table</h1>
        <p>Experience dining convenience like never before! Reserve your table now and enjoy a delightful meal at our restaurant. Book today!</p>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <div className="form-area flex column">
          <label for="date">Date</label>
          <input type="date" name="date" value={date} onChange={e => handleFieldChange(e, setDate)} required />
          <label for="time">Time</label>
          <input type="time" name="time" value={time} onChange={e => handleFieldChange(e, setTime)} required />
          <label for="diners">Number of Diners</label>
          <input type="number" name="diners" value={diners} onChange={e => handleFieldChange(e, setDiners)} min={1} max={30} placeholder="Enter a number between 1 and 30" required />
          <input type="submit" name="submit" value="Submit" className="submit" />
          <input type="button" name="reset" value="Reset" className="reset" onClick={handleReset} />
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default BookingPage;