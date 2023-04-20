import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('test app component', () => {
  it('render app component', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    userEvent.click(heading);

    expect(heading).toBeInTheDocument();
  });
});
