import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component19 from './lib1childlib4component19';

describe('Lib1childlib4component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component19 />);
    expect(baseElement).toBeTruthy();
  });
});
