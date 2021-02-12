import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component7 from './lib1childlib7component7';

describe('Lib1childlib7component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component7 />);
    expect(baseElement).toBeTruthy();
  });
});
