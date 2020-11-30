import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component4 from './lib3childlib0component4';

describe('Lib3childlib0component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component4 />);
    expect(baseElement).toBeTruthy();
  });
});
