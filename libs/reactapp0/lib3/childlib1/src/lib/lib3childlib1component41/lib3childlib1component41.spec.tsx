import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component41 from './lib3childlib1component41';

describe('Lib3childlib1component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component41 />);
    expect(baseElement).toBeTruthy();
  });
});
