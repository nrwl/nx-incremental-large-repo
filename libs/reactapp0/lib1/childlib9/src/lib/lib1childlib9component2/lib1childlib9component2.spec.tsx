import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component2 from './lib1childlib9component2';

describe('Lib1childlib9component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component2 />);
    expect(baseElement).toBeTruthy();
  });
});
