import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component32 from './lib2childlib1component32';

describe('Lib2childlib1component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component32 />);
    expect(baseElement).toBeTruthy();
  });
});
