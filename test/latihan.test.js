import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

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

describe('Greeting Component', () => {
    test('renders the greeting message with the provided name', () => {
      render(<Greeting name="Verra" />)

      const greetingElement = screen.getByTestId('greeting');
  
      expect(greetingElement).toHaveTextContent('Hello, Verra');
    });
  
    test('renders correctly without a name', () => {
      render(<Greeting name="" />);
  
      const greetingElement = screen.getByTestId('greeting');
  
      expect(greetingElement).toHaveTextContent('Hello,');
    });
  });

  describe('AlertButton Component', () => {
    test('calls alert with the correct message when clicked', () => {
      const mockMessage = 'This is an alert!';
      
      const alertMock = jest.fn();
      window.alert = alertMock;
  
      render(<AlertButton message={mockMessage} />);
  
      const buttonElement = screen.getByTestId('alert-button');
  
      fireEvent.click(buttonElement);
  
      expect(alertMock).toHaveBeenCalledWith(mockMessage);
    });
  
    test('renders the button correctly', () => {
      render(<AlertButton message="Test Message" />);
      const buttonElement = screen.getByTestId('alert-button');
  
      expect(buttonElement).toHaveTextContent('Show Alert');
    });
  });