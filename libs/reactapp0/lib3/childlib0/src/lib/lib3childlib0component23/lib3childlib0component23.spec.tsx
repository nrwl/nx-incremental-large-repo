import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component23 from './lib3childlib0component23';

describe('Lib3childlib0component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component23 />);
    expect(baseElement).toBeTruthy();
  });
});
