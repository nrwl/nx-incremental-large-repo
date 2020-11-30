import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib0 from './reactapp0-lib2-childlib0';

describe('Reactapp0Lib2Childlib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib0 />);
    expect(baseElement).toBeTruthy();
  });
});
