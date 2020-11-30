import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component32 from './lib2childlib3component32';

describe('Lib2childlib3component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component32 />);
    expect(baseElement).toBeTruthy();
  });
});
