import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component8 from './lib1childlib1component8';

describe('Lib1childlib1component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component8 />);
    expect(baseElement).toBeTruthy();
  });
});
