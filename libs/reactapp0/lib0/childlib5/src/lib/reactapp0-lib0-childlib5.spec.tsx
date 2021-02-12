import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib0Childlib5 from './reactapp0-lib0-childlib5';

describe('Reactapp0Lib0Childlib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib0Childlib5 />);
    expect(baseElement).toBeTruthy();
  });
});
