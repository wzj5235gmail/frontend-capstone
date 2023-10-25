import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm, { initializeTimes, updateTimes } from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve A Table");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes function returns the correct value', () => {
  expect(initializeTimes()).toBeInstanceOf(Array);
  expect(initializeTimes()).toHaveLength(0);
})

test('updateTimes function returns the correct value', () => {
  expect(updateTimes([], {type: 'date', value: '2023-11-30'})).toBeInstanceOf(Array);
  expect(updateTimes([], {type: 'date', value: '2023-11-30'})).toHaveLength(6);

  expect(updateTimes([], {type: 'reset', value: ''})).toBeInstanceOf(Array);
  expect(updateTimes([], {type: 'reset', value: ''})).toHaveLength(0);
})

test('HTML5 validation attributes exist', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const dateInput = screen.getByRole('date');
  const dinersInput = screen.getByRole('diners');
  expect(dateInput).toHaveAttribute('required');
  expect(dinersInput).toHaveAttribute('required');
  expect(dinersInput).toHaveAttribute('min');
  expect(dinersInput).toHaveAttribute('max');
})

test('Javascript validations for date can work', () => {
  // Invalid senario
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const dateInput = screen.getByRole('date');
  fireEvent.blur(dateInput);
  let errorMsg = screen.getByRole('date-error');
  expect(errorMsg).toBeInTheDocument();

  fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
  errorMsg = screen.getByRole('date-error');
  expect(errorMsg).toBeInTheDocument();

  // Valid senario
  fireEvent.change(dateInput, { target: { value: '2023-11-30' } });
  errorMsg = screen.queryByRole('date-error');
  expect(errorMsg).not.toBeInTheDocument();
})

test('Javascript validations for submit button can work', () => {
  // Invalid senario
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const submitInput = screen.getByRole('submit');
  expect(submitInput).toHaveAttribute('disabled');

  const dateInput = screen.getByRole('date');
  const dinersInput = screen.getByRole('diners');
  fireEvent.change(dateInput, { target: { value: '2000-11-30' } });
  fireEvent.change(dinersInput, { target: { value: '1' } });
  expect(submitInput).toHaveAttribute('disabled');

  fireEvent.change(dateInput, { target: { value: '2023-11-30' } });
  fireEvent.change(dinersInput, { target: { value: '31' } });
  expect(submitInput).toHaveAttribute('disabled');

  // Valid senario
  fireEvent.change(dateInput, { target: { value: '2023-11-30' } });
  fireEvent.change(dinersInput, { target: { value: '1' } });
  expect(submitInput).not.toHaveAttribute('disabled');
})