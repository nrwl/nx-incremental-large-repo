import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component12 from './lib1childlib4component12';

describe('Lib1childlib4component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component12 />);
    expect(baseElement).toBeTruthy();
  });
});
