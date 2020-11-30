import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component11 from './lib1childlib4component11';

describe('Lib1childlib4component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component11 />);
    expect(baseElement).toBeTruthy();
  });
});
