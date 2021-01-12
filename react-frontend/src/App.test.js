import { render, screen } from '@testing-library/react';
import App from './App';
import Polygon from './Modulis/Modulis';
it('calculates area correctly', () => {
  expect(new Polygon().calcArea()).toEqual(6);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
