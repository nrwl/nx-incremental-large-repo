import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component9 from './lib3childlib1component9';

describe('Lib3childlib1component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component9 />);
    expect(baseElement).toBeTruthy();
  });
});
