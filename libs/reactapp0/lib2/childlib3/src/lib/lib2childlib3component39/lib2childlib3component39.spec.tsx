import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component39 from './lib2childlib3component39';

describe('Lib2childlib3component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component39 />);
    expect(baseElement).toBeTruthy();
  });
});
