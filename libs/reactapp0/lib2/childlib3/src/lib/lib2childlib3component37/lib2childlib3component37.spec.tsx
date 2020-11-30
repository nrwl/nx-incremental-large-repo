import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component37 from './lib2childlib3component37';

describe('Lib2childlib3component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component37 />);
    expect(baseElement).toBeTruthy();
  });
});
