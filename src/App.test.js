import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './components/Counter';
import CheckBoxComponent from './components/CheckboxComponent';
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';
import SelectComponent from './components/SelectComponent';

describe('Test Component', () => {

  test('renders counter value', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('increments counter value on button click', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/counter: 0/i);
    const buttonElement = screen.getByRole('button', { name: /increment/i });

    fireEvent.click(buttonElement);

    expect(counterElement).toHaveTextContent(/counter: 1/i);
  });

  // CheckBox Tests
  test('renders CheckBoxComponent correctly', () => {
    const { getByTestId } = render(<CheckBoxComponent />);
    const checkbox = getByTestId('checkbox-component');
    expect(checkbox).toBeInTheDocument();
  });

  test('CheckBoxComponent can be clicked', () => {
    const { getByTestId } = render(<CheckBoxComponent />);
    const checkbox = getByTestId('checkbox-component');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  // List Tests
  test('renders ListComponent correctly', () => {
    const { getByTestId } = render(<ListComponent />);
    const list = getByTestId('list-component');
    expect(list).toBeInTheDocument();
  });

  test('ListComponent has correct number of items', () => {
    const { getAllByRole } = render(<ListComponent />);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  // Input Tests
  test('renders InputComponent correctly', () => {
    const { getByTestId } = render(<InputComponent />);
    const input = getByTestId('input-component');
    expect(input).toBeInTheDocument();
  });

  test('InputComponent can accept input', () => {
    const { getByTestId } = render(<InputComponent />);
    const input = getByTestId('input-component');
    fireEvent.change(input, { target: { value: 'Test input' } });
    expect(input.value).toBe('Test input');
  });

  // Button Tests
  test('renders ButtonComponent correctly', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const button = getByTestId('button-component');
    expect(button).toBeInTheDocument();
  });

  test('ButtonComponent can be clicked', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const button = getByTestId('button-component');
    fireEvent.click(button);
    expect(button).toBeInTheDocument(); // This is a placeholder assertion. In a real test you might check a state change or a mock function call.
  });

  // Select Tests
  test('renders SelectComponent correctly', () => {
    const { getByTestId } = render(<SelectComponent />);
    const select = getByTestId('select-component');
    expect(select).toBeInTheDocument();
  });

  test('SelectComponent can change value', () => {
    const { getByTestId } = render(<SelectComponent />);
    const select = getByTestId('select-component');
    fireEvent.change(select, { target: { value: 'option2' } });
    expect(select.value).toBe('option2');
  });
});
