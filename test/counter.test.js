import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />)
        const countValue = screen.getByTestId('counter-value')
        expect(countValue).toHaveTextContent('0')
    })

    test('increments count when increment button is clicked', () => {
        render(<Counter />)
        const countValue = screen.getByTestId('counter-value')
        const incrementButton = screen.getByText('Increment')
        fireEvent.click(incrementButton)

        expect(countValue).toHaveTextContent('1')
    })

    test('decrements count when decrement button is clicked', () => {
        render(<Counter />)
        const countValue = screen.getByTestId('counter-value')
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1')
    })
})

describe('Display Component', () => {
    test('renders the correct value', () => {
      const testValue = 42;
  
      render(<Display value={testValue} />);
  
      const displayElement = screen.getByTestId('display-value');
  
      expect(displayElement).toHaveTextContent(`Value: ${testValue}`);
    });
  
    test('renders correctly with empty value', () => {
      render(<Display value="" />);
  
      const displayElement = screen.getByTestId('display-value');
  
      expect(displayElement).toHaveTextContent('Value: ');
    });
  });