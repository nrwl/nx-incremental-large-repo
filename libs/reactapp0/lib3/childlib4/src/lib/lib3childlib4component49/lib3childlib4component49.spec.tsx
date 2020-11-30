import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component49 from './lib3childlib4component49';

describe('Lib3childlib4component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component49 />);
    expect(baseElement).toBeTruthy();
  });
});
