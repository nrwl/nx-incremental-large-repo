import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component5 from './lib1childlib4component5';

describe('Lib1childlib4component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component5 />);
    expect(baseElement).toBeTruthy();
  });
});
