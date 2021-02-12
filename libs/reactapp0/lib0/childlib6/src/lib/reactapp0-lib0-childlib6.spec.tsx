import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib6 from './reactapp0-lib0-childlib6';

describe('Reactapp0Lib0Childlib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib6 />);
    expect(baseElement).toBeTruthy();
  });
});
