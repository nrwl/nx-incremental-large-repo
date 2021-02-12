import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component29 from './lib3childlib1component29';

describe('Lib3childlib1component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component29 />);
    expect(baseElement).toBeTruthy();
  });
});
