import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component5 from './lib1childlib5component5';

describe('Lib1childlib5component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component5 />);
    expect(baseElement).toBeTruthy();
  });
});
