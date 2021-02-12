import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component45 from './lib1childlib1component45';

describe('Lib1childlib1component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component45 />);
    expect(baseElement).toBeTruthy();
  });
});
