import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component28 from './lib2childlib3component28';

describe('Lib2childlib3component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component28 />);
    expect(baseElement).toBeTruthy();
  });
});
