import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component34 from './lib1childlib2component34';

describe('Lib1childlib2component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component34 />);
    expect(baseElement).toBeTruthy();
  });
});
