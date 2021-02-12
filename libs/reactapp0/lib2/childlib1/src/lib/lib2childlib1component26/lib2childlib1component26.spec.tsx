import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component26 from './lib2childlib1component26';

describe('Lib2childlib1component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component26 />);
    expect(baseElement).toBeTruthy();
  });
});
