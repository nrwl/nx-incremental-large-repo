import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component41 from './lib1childlib9component41';

describe('Lib1childlib9component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component41 />);
    expect(baseElement).toBeTruthy();
  });
});
