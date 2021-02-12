import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component34 from './lib1childlib1component34';

describe('Lib1childlib1component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component34 />);
    expect(baseElement).toBeTruthy();
  });
});
