import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component41 from './lib1childlib0component41';

describe('Lib1childlib0component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component41 />);
    expect(baseElement).toBeTruthy();
  });
});
