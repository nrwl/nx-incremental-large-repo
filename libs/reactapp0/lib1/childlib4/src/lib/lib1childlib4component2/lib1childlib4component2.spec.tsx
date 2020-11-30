import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component2 from './lib1childlib4component2';

describe('Lib1childlib4component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component2 />);
    expect(baseElement).toBeTruthy();
  });
});
