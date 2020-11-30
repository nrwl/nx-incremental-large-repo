import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component33 from './lib1childlib2component33';

describe('Lib1childlib2component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component33 />);
    expect(baseElement).toBeTruthy();
  });
});
