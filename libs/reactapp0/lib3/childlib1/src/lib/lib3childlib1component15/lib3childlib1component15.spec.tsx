import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component15 from './lib3childlib1component15';

describe('Lib3childlib1component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component15 />);
    expect(baseElement).toBeTruthy();
  });
});
