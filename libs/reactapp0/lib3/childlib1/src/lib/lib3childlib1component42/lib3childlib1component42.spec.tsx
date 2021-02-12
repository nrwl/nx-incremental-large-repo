import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component42 from './lib3childlib1component42';

describe('Lib3childlib1component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component42 />);
    expect(baseElement).toBeTruthy();
  });
});
