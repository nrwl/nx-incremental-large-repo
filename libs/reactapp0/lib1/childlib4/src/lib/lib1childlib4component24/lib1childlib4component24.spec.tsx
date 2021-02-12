import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component24 from './lib1childlib4component24';

describe('Lib1childlib4component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component24 />);
    expect(baseElement).toBeTruthy();
  });
});
