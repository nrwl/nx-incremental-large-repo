import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component8 from './lib3childlib1component8';

describe('Lib3childlib1component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component8 />);
    expect(baseElement).toBeTruthy();
  });
});
