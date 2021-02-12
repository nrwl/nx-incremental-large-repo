import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component44 from './lib2childlib3component44';

describe('Lib2childlib3component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component44 />);
    expect(baseElement).toBeTruthy();
  });
});
