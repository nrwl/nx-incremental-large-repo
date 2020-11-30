import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component2 from './lib3childlib1component2';

describe('Lib3childlib1component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component2 />);
    expect(baseElement).toBeTruthy();
  });
});
