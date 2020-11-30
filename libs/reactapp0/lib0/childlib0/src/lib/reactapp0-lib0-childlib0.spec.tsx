import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib0 from './reactapp0-lib0-childlib0';

describe('Reactapp0Lib0Childlib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib0 />);
    expect(baseElement).toBeTruthy();
  });
});
