import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component21 from './lib1childlib5component21';

describe('Lib1childlib5component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component21 />);
    expect(baseElement).toBeTruthy();
  });
});
