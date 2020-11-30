import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Childlib0 from './reactapp0-lib3-childlib0';

describe('Reactapp0Lib3Childlib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Childlib0 />);
    expect(baseElement).toBeTruthy();
  });
});
