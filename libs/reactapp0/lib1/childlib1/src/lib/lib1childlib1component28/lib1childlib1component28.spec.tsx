import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component28 from './lib1childlib1component28';

describe('Lib1childlib1component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component28 />);
    expect(baseElement).toBeTruthy();
  });
});
