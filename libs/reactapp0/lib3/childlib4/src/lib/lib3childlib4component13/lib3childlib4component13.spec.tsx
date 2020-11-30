import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component13 from './lib3childlib4component13';

describe('Lib3childlib4component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component13 />);
    expect(baseElement).toBeTruthy();
  });
});
