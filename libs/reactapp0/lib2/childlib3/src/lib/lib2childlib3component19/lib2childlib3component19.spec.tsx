import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component19 from './lib2childlib3component19';

describe('Lib2childlib3component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component19 />);
    expect(baseElement).toBeTruthy();
  });
});
