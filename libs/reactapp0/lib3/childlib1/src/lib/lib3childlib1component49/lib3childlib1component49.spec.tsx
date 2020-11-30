import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component49 from './lib3childlib1component49';

describe('Lib3childlib1component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component49 />);
    expect(baseElement).toBeTruthy();
  });
});
