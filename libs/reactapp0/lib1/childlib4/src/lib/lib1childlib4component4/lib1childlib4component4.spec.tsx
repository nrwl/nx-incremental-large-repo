import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component4 from './lib1childlib4component4';

describe('Lib1childlib4component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component4 />);
    expect(baseElement).toBeTruthy();
  });
});
