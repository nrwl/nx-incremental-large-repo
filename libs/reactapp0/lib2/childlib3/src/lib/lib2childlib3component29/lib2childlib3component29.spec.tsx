import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component29 from './lib2childlib3component29';

describe('Lib2childlib3component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component29 />);
    expect(baseElement).toBeTruthy();
  });
});
