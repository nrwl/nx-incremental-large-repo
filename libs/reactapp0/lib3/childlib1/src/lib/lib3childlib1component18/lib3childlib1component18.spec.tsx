import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component18 from './lib3childlib1component18';

describe('Lib3childlib1component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component18 />);
    expect(baseElement).toBeTruthy();
  });
});
