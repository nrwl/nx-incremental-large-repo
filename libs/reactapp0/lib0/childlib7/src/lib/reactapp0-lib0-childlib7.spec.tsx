import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib7 from './reactapp0-lib0-childlib7';

describe('Reactapp0Lib0Childlib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib7 />);
    expect(baseElement).toBeTruthy();
  });
});
