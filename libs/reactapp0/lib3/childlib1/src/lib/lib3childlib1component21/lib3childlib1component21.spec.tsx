import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component21 from './lib3childlib1component21';

describe('Lib3childlib1component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component21 />);
    expect(baseElement).toBeTruthy();
  });
});
