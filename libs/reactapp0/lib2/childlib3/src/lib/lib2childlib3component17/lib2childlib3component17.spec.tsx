import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component17 from './lib2childlib3component17';

describe('Lib2childlib3component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component17 />);
    expect(baseElement).toBeTruthy();
  });
});
