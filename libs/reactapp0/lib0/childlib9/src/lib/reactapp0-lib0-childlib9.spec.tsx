import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib9 from './reactapp0-lib0-childlib9';

describe('Reactapp0Lib0Childlib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib9 />);
    expect(baseElement).toBeTruthy();
  });
});
