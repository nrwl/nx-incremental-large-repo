import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib0 from './reactapp0-lib1-childlib0';

describe('Reactapp0Lib1Childlib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib0 />);
    expect(baseElement).toBeTruthy();
  });
});
