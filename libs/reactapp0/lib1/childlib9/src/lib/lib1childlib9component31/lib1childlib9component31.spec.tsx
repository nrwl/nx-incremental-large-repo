import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component31 from './lib1childlib9component31';

describe('Lib1childlib9component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component31 />);
    expect(baseElement).toBeTruthy();
  });
});
