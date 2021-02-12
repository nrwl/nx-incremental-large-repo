import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component20 from './lib1childlib1component20';

describe('Lib1childlib1component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component20 />);
    expect(baseElement).toBeTruthy();
  });
});
