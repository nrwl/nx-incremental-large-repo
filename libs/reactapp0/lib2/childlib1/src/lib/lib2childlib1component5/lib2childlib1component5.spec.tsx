import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component5 from './lib2childlib1component5';

describe('Lib2childlib1component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component5 />);
    expect(baseElement).toBeTruthy();
  });
});
