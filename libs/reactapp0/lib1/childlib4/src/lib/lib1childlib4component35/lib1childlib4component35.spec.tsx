import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component35 from './lib1childlib4component35';

describe('Lib1childlib4component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component35 />);
    expect(baseElement).toBeTruthy();
  });
});
