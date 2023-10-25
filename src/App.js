import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
