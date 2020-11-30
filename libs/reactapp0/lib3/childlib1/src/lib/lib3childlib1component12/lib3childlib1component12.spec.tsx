import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component12 from './lib3childlib1component12';

describe('Lib3childlib1component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component12 />);
    expect(baseElement).toBeTruthy();
  });
});
