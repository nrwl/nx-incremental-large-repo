import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component33 from './lib1childlib4component33';

describe('Lib1childlib4component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component33 />);
    expect(baseElement).toBeTruthy();
  });
});
