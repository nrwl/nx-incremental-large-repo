import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component2 from './lib1childlib5component2';

describe('Lib1childlib5component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component2 />);
    expect(baseElement).toBeTruthy();
  });
});
