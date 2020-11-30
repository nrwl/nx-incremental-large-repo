import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component21 from './lib3childlib4component21';

describe('Lib3childlib4component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component21 />);
    expect(baseElement).toBeTruthy();
  });
});
