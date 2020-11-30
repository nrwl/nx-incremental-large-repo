import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component21 from './lib1childlib4component21';

describe('Lib1childlib4component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component21 />);
    expect(baseElement).toBeTruthy();
  });
});
