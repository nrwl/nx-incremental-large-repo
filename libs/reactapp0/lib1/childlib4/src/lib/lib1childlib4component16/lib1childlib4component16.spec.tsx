import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component16 from './lib1childlib4component16';

describe('Lib1childlib4component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component16 />);
    expect(baseElement).toBeTruthy();
  });
});
