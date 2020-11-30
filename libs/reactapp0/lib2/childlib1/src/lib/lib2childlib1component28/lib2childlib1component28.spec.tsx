import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component28 from './lib2childlib1component28';

describe('Lib2childlib1component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component28 />);
    expect(baseElement).toBeTruthy();
  });
});
