import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component41 from './lib3childlib4component41';

describe('Lib3childlib4component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component41 />);
    expect(baseElement).toBeTruthy();
  });
});
