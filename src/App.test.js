import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './components/Counter';
import CheckBoxComponent from './components/CheckboxComponent';
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';
import SelectComponent from './components/SelectComponent';
import Home from './components/Home/Home';

describe('Testar Componente', () => {

  test('Renderiza valor do Counter', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/contador: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('incrementa valor do contador ao clicar no botão', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/contador: 0/i);
    const buttonElement = screen.getByRole('button', { name: /incrementar/i });

    fireEvent.click(buttonElement);

    expect(counterElement).toHaveTextContent(/contador: 1/i);
  });

  // CheckBox Tests
  test('renderiza CheckBoxComponent corretamente', () => {
    const { getByTestId } = render(<CheckBoxComponent />);
    const checkbox = getByTestId('checkbox-component');
    expect(checkbox).toBeInTheDocument();
  });

  test('CheckBoxComponent pode ser clicado', () => {
    const { getByTestId } = render(<CheckBoxComponent />);
    const checkbox = getByTestId('checkbox-component');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test("deve renderizar o componente Home corretamente", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  // List Tests
  test('renderiza ListComponent corretamente', () => {
    const { getByTestId } = render(<ListComponent />);
    const list = getByTestId('list-component');
    expect(list).toBeInTheDocument();
  });

  test('ListComponent tem o número correto de itens', () => {
    const { getAllByRole } = render(<ListComponent />);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  // Input Tests
  test('renderiza InputComponent corretamente', () => {
    const { getByTestId } = render(<InputComponent />);
    const input = getByTestId('input-component');
    expect(input).toBeInTheDocument();
  });

  test('InputComponent pode aceitar entrada', () => {
    const { getByTestId } = render(<InputComponent />);
    const input = getByTestId('input-component');
    fireEvent.change(input, { target: { value: 'Teste de entrada' } });
    expect(input.value).toBe('Teste de entrada');
  });

  // Button Tests
  test('renderiza ButtonComponent corretamente', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const button = getByTestId('button-component');
    expect(button).toBeInTheDocument();
  });

  test('ButtonComponent pode ser clicado', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const button = getByTestId('button-component');
    fireEvent.click(button);
    expect(button).toBeInTheDocument(); // Esta é uma afirmação placeholder. Em um teste real, você pode verificar uma alteração de estado ou uma chamada de função mock.
  });

  // Select Tests
  test('renderiza SelectComponent corretamente', () => {
    const { getByTestId } = render(<SelectComponent />);
    const select = getByTestId('select-component');
    expect(select).toBeInTheDocument();
  });

  test('renderiza ListComponent corretamente', () => {
    const { container } = render(<ListComponent />);
    expect(container).toMatchSnapshot();
  });

  test('renderiza InputComponent corretamente', () => {
    const { container } = render(<InputComponent />);
    expect(container).toMatchSnapshot();
  });

  test('renderiza ListComponent corretamente', () => {
    const { container } = render(<ListComponent />);
    expect(container).toMatchSnapshot();
  });

  test('SelectComponent pode mudar valor', () => {
    const { getByTestId } = render(<SelectComponent />);
    const select = getByTestId('select-component');
    fireEvent.change(select, { target: { value: 'opcao2' } });
    expect(select.value).toBe('opcao2');
  });
});
