import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component41 from './lib1childlib1component41';

describe('Lib1childlib1component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component41 />);
    expect(baseElement).toBeTruthy();
  });
});
