import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component18 from './lib3childlib9component18';

describe('Lib3childlib9component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component18 />);
    expect(baseElement).toBeTruthy();
  });
});
