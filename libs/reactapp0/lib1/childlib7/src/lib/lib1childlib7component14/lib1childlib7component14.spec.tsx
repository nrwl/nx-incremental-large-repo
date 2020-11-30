import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component14 from './lib1childlib7component14';

describe('Lib1childlib7component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component14 />);
    expect(baseElement).toBeTruthy();
  });
});
