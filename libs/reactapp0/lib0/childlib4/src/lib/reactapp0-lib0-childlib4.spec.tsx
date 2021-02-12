import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib4 from './reactapp0-lib0-childlib4';

describe('Reactapp0Lib0Childlib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib4 />);
    expect(baseElement).toBeTruthy();
  });
});
