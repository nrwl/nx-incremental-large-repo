import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component12 from './lib3childlib4component12';

describe('Lib3childlib4component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component12 />);
    expect(baseElement).toBeTruthy();
  });
});
