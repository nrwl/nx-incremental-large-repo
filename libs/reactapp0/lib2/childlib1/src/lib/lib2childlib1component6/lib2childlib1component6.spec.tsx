import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component6 from './lib2childlib1component6';

describe('Lib2childlib1component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component6 />);
    expect(baseElement).toBeTruthy();
  });
});
