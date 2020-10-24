import { render } from '@testing-library/react';
import React from 'react';

import SidebarMenu from './SidebarMenu';

test.skip('renders learn react link', () => {
  const { getByText } = render(<SidebarMenu />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
