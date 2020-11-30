import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component31 from './lib3childlib4component31';

describe('Lib3childlib4component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component31 />);
    expect(baseElement).toBeTruthy();
  });
});
