import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Index from './Index';

test('renders default page', () => {
  render(<Index />);
  const element = screen.getByText(/hell0/i);
  expect(element).toBeInTheDocument();
});
