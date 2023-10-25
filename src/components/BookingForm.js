import { useReducer, useState } from "react";

const fetchApi = (date) => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
}

const submitApi = data => {
  if (Math.random() > .5) {
    return true;
  }
  return false;
}

export const updateTimes = (state, action) => {
  if (action.type === 'date') {
    return fetchApi(action.value);
  }
  if (action.type === 'reset') {
    return [];
  }
  return state;
}

export const initializeTimes = () => [];

const BookingForm = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [date, setDate] = useState({
    value: '',
    touched: false
  });
  const [time, setTime] = useState({
    value: '17:00',
    touched: false
  });
  const [diners, setDiners] = useState({
    value: '',
    touched: false
  });
  const [occasion, setOccasion] = useState({
    value: 'Birthday',
    touched: false
  });

  const handleFieldChange = (e, f) => {
    f({
      value: e.target.value,
      touched: true
    });
  }

  const handleDateChange = (e, f) => {
    f({
      value: e.target.value,
      touched: true
    });
    validateDate() && dispatch({ type: 'date', value: date})
  }

  const handleSubmit = () => {
    const result = submitApi({
      date, time, diners, occasion
    });
    if (result) {
      alert('Reservation Successful!')
    }
    else {
      alert("Reservation Failed!")
    }
  }

  const handleBlur = (f) => {
    f(prev => ({
      ...prev,
      touched: true
    }))
  }
  
  const handleReset = () => {
    setDate({
      value: '',
      touched: false
    });
    setTime({
      value: '',
      touched: false
    });
    setDiners({
      value: '',
      touched: false
    });
    setOccasion({
      value: 'Birthday',
      touched: false
    });
    dispatch({ type: 'reset', value:'' });
  }

  const validateDiners = () => {
    return Number(diners.value) >= 1 && Number(diners.value) <= 30 && diners.value.length > 0;
  }

  const validateDate = () => {
    return date.value.length > 0 && new Date(date.value) > new Date();
  }

  return (
    <div className="booking">
      <div className="cover flex column">
        <h1>Reserve A Table</h1>
        <p>Experience dining convenience like never before! Reserve your table now and enjoy a delightful meal at our restaurant. Book today!</p>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <div className="form-area flex column">

          <label htmlFor="date">Date</label>
          <input type="date" name="date" value={date.value} onBlur={() => handleBlur(setDate)} onChange={e => handleDateChange(e, setDate)} required role="date"/>
          {date.touched && !validateDate() && <span className="error" role="date-error">Please choose a date later than today</span>}

          <label htmlFor="time">Time</label>
          <select value={time.value} onChange={e => handleFieldChange(e, setTime)} onBlur={() => handleBlur(setTime)} role="time">
            {availableTimes && availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
          </select>

          <label htmlFor="diners">Number of Guests</label>
          <input type="number" name="diners" value={diners.value} onChange={e => handleFieldChange(e, setDiners)} onBlur={() => handleBlur(setDiners)} min={1} max={30} placeholder="Enter a number between 1 and 30" required role="diners"/>
          {diners.touched && !validateDiners() && <span className="error">Please enter a valid number between 1 and 30</span>}

          <label htmlFor="occasion">Occasion</label>
          <select value={occasion.value} onChange={e => handleFieldChange(e, setOccasion)} onBlur={() => handleBlur(setOccasion)} role="occasion">
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>

          <input type="submit" name="submit" value="Submit" className="submit" disabled={!validateDate() || !validateDiners() } role="submit" aira-label="On Click"/>
          <input type="button" name="reset" value="Reset" className="reset" onClick={handleReset} aira-label="On Click"/>

        </div>
      </form>
    </div>
  )
}

export default BookingForm;