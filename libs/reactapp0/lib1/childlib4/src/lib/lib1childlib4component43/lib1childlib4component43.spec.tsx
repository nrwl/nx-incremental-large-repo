import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component43 from './lib1childlib4component43';

describe('Lib1childlib4component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component43 />);
    expect(baseElement).toBeTruthy();
  });
});
