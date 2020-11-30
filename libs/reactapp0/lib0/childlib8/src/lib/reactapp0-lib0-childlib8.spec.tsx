import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib8 from './reactapp0-lib0-childlib8';

describe('Reactapp0Lib0Childlib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib8 />);
    expect(baseElement).toBeTruthy();
  });
});
