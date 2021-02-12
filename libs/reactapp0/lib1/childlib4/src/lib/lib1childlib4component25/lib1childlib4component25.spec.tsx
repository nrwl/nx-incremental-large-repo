import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component25 from './lib1childlib4component25';

describe('Lib1childlib4component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component25 />);
    expect(baseElement).toBeTruthy();
  });
});
