import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component45 from './lib1childlib9component45';

describe('Lib1childlib9component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component45 />);
    expect(baseElement).toBeTruthy();
  });
});
