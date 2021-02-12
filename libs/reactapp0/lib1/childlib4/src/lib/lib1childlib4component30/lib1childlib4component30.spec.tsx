import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component30 from './lib1childlib4component30';

describe('Lib1childlib4component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component30 />);
    expect(baseElement).toBeTruthy();
  });
});
