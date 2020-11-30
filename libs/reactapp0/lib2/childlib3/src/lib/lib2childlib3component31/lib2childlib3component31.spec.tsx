import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component31 from './lib2childlib3component31';

describe('Lib2childlib3component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component31 />);
    expect(baseElement).toBeTruthy();
  });
});
