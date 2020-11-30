import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component27 from './lib2childlib3component27';

describe('Lib2childlib3component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component27 />);
    expect(baseElement).toBeTruthy();
  });
});
