import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib3 from './reactapp0-lib0-childlib3';

describe('Reactapp0Lib0Childlib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib3 />);
    expect(baseElement).toBeTruthy();
  });
});
