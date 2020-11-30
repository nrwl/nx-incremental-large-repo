import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib0 from './reactapp0-lib4-childlib0';

describe('Reactapp0Lib4Childlib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib0 />);
    expect(baseElement).toBeTruthy();
  });
});
