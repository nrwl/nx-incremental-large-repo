import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component1 from './lib1childlib6component1';

describe('Lib1childlib6component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component1 />);
    expect(baseElement).toBeTruthy();
  });
});
