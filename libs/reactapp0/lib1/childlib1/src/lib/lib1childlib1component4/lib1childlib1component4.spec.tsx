import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component4 from './lib1childlib1component4';

describe('Lib1childlib1component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component4 />);
    expect(baseElement).toBeTruthy();
  });
});
