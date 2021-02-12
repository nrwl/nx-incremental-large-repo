import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component7 from './lib1childlib0component7';

describe('Lib1childlib0component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component7 />);
    expect(baseElement).toBeTruthy();
  });
});
