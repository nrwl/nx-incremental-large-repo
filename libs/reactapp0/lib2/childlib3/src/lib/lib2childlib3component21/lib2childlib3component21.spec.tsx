import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component21 from './lib2childlib3component21';

describe('Lib2childlib3component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component21 />);
    expect(baseElement).toBeTruthy();
  });
});
