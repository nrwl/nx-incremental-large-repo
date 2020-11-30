import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component13 from './lib1childlib2component13';

describe('Lib1childlib2component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component13 />);
    expect(baseElement).toBeTruthy();
  });
});
