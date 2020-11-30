import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component39 from './lib1childlib2component39';

describe('Lib1childlib2component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component39 />);
    expect(baseElement).toBeTruthy();
  });
});
