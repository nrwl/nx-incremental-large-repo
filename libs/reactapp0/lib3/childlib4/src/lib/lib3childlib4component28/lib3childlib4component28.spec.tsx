import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component28 from './lib3childlib4component28';

describe('Lib3childlib4component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component28 />);
    expect(baseElement).toBeTruthy();
  });
});
