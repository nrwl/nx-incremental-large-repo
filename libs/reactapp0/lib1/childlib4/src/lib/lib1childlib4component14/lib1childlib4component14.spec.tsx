import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component14 from './lib1childlib4component14';

describe('Lib1childlib4component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component14 />);
    expect(baseElement).toBeTruthy();
  });
});
