import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component0 from './lib2childlib3component0';

describe('Lib2childlib3component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component0 />);
    expect(baseElement).toBeTruthy();
  });
});
