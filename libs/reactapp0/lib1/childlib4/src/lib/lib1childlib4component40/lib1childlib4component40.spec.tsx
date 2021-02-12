import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component40 from './lib1childlib4component40';

describe('Lib1childlib4component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component40 />);
    expect(baseElement).toBeTruthy();
  });
});
