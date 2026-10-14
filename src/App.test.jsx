// @vitest-environment jsdom
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders App component and checks for text messages', () => {
  render(<App />);

  const helloElement = screen.getByText(/hi Ashish/i);
  expect(helloElement).toBeInTheDocument();

  const secondElement = screen.getByText(/This is second writen by features-1/i);
  expect(secondElement).toBeInTheDocument();
});