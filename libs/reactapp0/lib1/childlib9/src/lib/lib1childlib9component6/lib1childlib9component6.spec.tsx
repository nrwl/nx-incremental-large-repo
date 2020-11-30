import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component6 from './lib1childlib9component6';

describe('Lib1childlib9component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component6 />);
    expect(baseElement).toBeTruthy();
  });
});
