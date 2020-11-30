import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component15 from './lib2childlib1component15';

describe('Lib2childlib1component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component15 />);
    expect(baseElement).toBeTruthy();
  });
});
