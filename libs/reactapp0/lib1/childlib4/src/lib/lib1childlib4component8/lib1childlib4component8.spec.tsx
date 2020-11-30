import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component8 from './lib1childlib4component8';

describe('Lib1childlib4component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component8 />);
    expect(baseElement).toBeTruthy();
  });
});
