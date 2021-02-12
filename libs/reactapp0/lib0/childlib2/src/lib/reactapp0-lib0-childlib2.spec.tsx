import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib2 from './reactapp0-lib0-childlib2';

describe('Reactapp0Lib0Childlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib2 />);
    expect(baseElement).toBeTruthy();
  });
});
