import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component7 from './lib1childlib2component7';

describe('Lib1childlib2component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component7 />);
    expect(baseElement).toBeTruthy();
  });
});
