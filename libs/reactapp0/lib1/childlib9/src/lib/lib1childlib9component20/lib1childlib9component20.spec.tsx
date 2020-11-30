import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component20 from './lib1childlib9component20';

describe('Lib1childlib9component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component20 />);
    expect(baseElement).toBeTruthy();
  });
});
