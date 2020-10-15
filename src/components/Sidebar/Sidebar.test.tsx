import React from 'react';
import { render } from '@testing-library/react';
import App from './Sidebar';
import Sidebar from './Sidebar';

test.skip('renders learn react link', () => {
  const { getByText } = render(
    <Sidebar
      currentUser={undefined}
      onLoginSuccess={() => {}}
      onLoginFailure={() => {}}
    />
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
