import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component25 from './lib2childlib1component25';

describe('Lib2childlib1component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component25 />);
    expect(baseElement).toBeTruthy();
  });
});
