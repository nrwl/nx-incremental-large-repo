import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Lib0 from './reactapp0-lib0-lib0';

describe('Reactapp0Lib0Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
