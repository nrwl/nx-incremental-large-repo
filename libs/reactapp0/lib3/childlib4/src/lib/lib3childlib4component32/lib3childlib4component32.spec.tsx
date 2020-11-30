import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component32 from './lib3childlib4component32';

describe('Lib3childlib4component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component32 />);
    expect(baseElement).toBeTruthy();
  });
});
