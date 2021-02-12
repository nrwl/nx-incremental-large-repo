import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component32 from './lib1childlib9component32';

describe('Lib1childlib9component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component32 />);
    expect(baseElement).toBeTruthy();
  });
});
