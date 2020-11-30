import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component19 from './lib1childlib2component19';

describe('Lib1childlib2component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component19 />);
    expect(baseElement).toBeTruthy();
  });
});
