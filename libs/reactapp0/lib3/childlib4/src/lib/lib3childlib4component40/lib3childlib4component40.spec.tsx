import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component40 from './lib3childlib4component40';

describe('Lib3childlib4component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component40 />);
    expect(baseElement).toBeTruthy();
  });
});
