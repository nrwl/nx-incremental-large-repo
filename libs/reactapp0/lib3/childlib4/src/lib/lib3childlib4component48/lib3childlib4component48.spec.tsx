import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component48 from './lib3childlib4component48';

describe('Lib3childlib4component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component48 />);
    expect(baseElement).toBeTruthy();
  });
});
