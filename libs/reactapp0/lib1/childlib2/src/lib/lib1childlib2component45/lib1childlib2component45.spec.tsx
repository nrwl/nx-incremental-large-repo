import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component45 from './lib1childlib2component45';

describe('Lib1childlib2component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component45 />);
    expect(baseElement).toBeTruthy();
  });
});
