import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component24 from './lib1childlib9component24';

describe('Lib1childlib9component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component24 />);
    expect(baseElement).toBeTruthy();
  });
});
