import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component1 from './lib3childlib9component1';

describe('Lib3childlib9component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component1 />);
    expect(baseElement).toBeTruthy();
  });
});
