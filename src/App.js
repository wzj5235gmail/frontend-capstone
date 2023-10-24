import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import BookingPage from './components/BookingPage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={FrontPage} />
          <Route path='/booking' exact Component={BookingPage} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
