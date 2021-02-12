import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component9 from './lib1childlib5component9';

describe('Lib1childlib5component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component9 />);
    expect(baseElement).toBeTruthy();
  });
});
