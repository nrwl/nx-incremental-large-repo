import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component43 from './lib1childlib2component43';

describe('Lib1childlib2component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component43 />);
    expect(baseElement).toBeTruthy();
  });
});
