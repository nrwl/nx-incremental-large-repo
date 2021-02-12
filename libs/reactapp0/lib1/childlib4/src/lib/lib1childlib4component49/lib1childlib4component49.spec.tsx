import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component49 from './lib1childlib4component49';

describe('Lib1childlib4component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component49 />);
    expect(baseElement).toBeTruthy();
  });
});
