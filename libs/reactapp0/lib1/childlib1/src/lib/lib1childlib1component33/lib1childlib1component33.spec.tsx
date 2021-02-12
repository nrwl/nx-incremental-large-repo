import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component33 from './lib1childlib1component33';

describe('Lib1childlib1component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component33 />);
    expect(baseElement).toBeTruthy();
  });
});
