import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component5 from './lib3childlib1component5';

describe('Lib3childlib1component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component5 />);
    expect(baseElement).toBeTruthy();
  });
});
