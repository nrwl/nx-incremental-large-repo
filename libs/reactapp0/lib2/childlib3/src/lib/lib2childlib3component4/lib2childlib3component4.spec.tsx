import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component4 from './lib2childlib3component4';

describe('Lib2childlib3component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component4 />);
    expect(baseElement).toBeTruthy();
  });
});
