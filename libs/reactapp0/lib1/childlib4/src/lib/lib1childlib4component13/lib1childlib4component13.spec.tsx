import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component13 from './lib1childlib4component13';

describe('Lib1childlib4component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component13 />);
    expect(baseElement).toBeTruthy();
  });
});
