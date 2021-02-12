import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component26 from './lib1childlib5component26';

describe('Lib1childlib5component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component26 />);
    expect(baseElement).toBeTruthy();
  });
});
