import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component37 from './lib2childlib1component37';

describe('Lib2childlib1component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component37 />);
    expect(baseElement).toBeTruthy();
  });
});
