import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component29 from './lib3childlib4component29';

describe('Lib3childlib4component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component29 />);
    expect(baseElement).toBeTruthy();
  });
});
