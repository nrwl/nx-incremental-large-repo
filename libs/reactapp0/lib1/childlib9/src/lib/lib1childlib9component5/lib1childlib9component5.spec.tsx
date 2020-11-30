import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component5 from './lib1childlib9component5';

describe('Lib1childlib9component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component5 />);
    expect(baseElement).toBeTruthy();
  });
});
