import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib1 from './reactapp0-lib0-childlib1';

describe('Reactapp0Lib0Childlib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib1 />);
    expect(baseElement).toBeTruthy();
  });
});
