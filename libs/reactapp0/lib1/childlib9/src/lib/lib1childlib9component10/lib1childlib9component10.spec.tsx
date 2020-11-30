import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component10 from './lib1childlib9component10';

describe('Lib1childlib9component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component10 />);
    expect(baseElement).toBeTruthy();
  });
});
