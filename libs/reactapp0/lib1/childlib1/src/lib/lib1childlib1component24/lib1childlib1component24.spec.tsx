import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component24 from './lib1childlib1component24';

describe('Lib1childlib1component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component24 />);
    expect(baseElement).toBeTruthy();
  });
});
