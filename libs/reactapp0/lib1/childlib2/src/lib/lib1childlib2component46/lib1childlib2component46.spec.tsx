import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component46 from './lib1childlib2component46';

describe('Lib1childlib2component46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component46 />);
    expect(baseElement).toBeTruthy();
  });
});
