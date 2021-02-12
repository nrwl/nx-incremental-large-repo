import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component0 from './lib1childlib5component0';

describe('Lib1childlib5component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component0 />);
    expect(baseElement).toBeTruthy();
  });
});
