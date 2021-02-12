import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component8 from './lib2childlib3component8';

describe('Lib2childlib3component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component8 />);
    expect(baseElement).toBeTruthy();
  });
});
