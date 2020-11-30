import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component45 from './lib3childlib1component45';

describe('Lib3childlib1component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component45 />);
    expect(baseElement).toBeTruthy();
  });
});
