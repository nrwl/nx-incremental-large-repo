import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component19 from './lib1childlib1component19';

describe('Lib1childlib1component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component19 />);
    expect(baseElement).toBeTruthy();
  });
});
