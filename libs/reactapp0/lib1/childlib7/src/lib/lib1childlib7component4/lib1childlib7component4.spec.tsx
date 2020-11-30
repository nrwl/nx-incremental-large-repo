import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component4 from './lib1childlib7component4';

describe('Lib1childlib7component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component4 />);
    expect(baseElement).toBeTruthy();
  });
});
