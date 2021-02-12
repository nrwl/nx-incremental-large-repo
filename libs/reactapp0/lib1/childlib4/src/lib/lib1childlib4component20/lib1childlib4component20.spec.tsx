import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component20 from './lib1childlib4component20';

describe('Lib1childlib4component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component20 />);
    expect(baseElement).toBeTruthy();
  });
});
