import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component20 from './lib2childlib3component20';

describe('Lib2childlib3component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component20 />);
    expect(baseElement).toBeTruthy();
  });
});
