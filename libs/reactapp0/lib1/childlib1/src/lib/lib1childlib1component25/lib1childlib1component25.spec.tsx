import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component25 from './lib1childlib1component25';

describe('Lib1childlib1component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component25 />);
    expect(baseElement).toBeTruthy();
  });
});
