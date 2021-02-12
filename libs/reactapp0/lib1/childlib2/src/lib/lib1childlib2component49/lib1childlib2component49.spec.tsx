import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component49 from './lib1childlib2component49';

describe('Lib1childlib2component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component49 />);
    expect(baseElement).toBeTruthy();
  });
});
