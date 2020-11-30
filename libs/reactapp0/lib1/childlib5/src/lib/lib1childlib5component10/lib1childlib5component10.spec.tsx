import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component10 from './lib1childlib5component10';

describe('Lib1childlib5component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component10 />);
    expect(baseElement).toBeTruthy();
  });
});
