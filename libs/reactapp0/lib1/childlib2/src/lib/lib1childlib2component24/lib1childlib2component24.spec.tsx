import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component24 from './lib1childlib2component24';

describe('Lib1childlib2component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component24 />);
    expect(baseElement).toBeTruthy();
  });
});
