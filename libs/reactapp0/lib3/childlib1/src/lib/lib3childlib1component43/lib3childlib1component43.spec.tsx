import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component43 from './lib3childlib1component43';

describe('Lib3childlib1component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component43 />);
    expect(baseElement).toBeTruthy();
  });
});
