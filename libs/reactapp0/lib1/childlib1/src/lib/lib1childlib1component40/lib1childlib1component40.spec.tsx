import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component40 from './lib1childlib1component40';

describe('Lib1childlib1component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component40 />);
    expect(baseElement).toBeTruthy();
  });
});
