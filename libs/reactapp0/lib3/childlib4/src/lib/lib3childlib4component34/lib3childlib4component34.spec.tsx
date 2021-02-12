import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component34 from './lib3childlib4component34';

describe('Lib3childlib4component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component34 />);
    expect(baseElement).toBeTruthy();
  });
});
