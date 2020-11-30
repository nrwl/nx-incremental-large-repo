import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component13 from './lib1childlib9component13';

describe('Lib1childlib9component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component13 />);
    expect(baseElement).toBeTruthy();
  });
});
