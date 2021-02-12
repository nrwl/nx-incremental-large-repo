import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component10 from './lib3childlib9component10';

describe('Lib3childlib9component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component10 />);
    expect(baseElement).toBeTruthy();
  });
});
