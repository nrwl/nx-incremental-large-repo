import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component25 from './lib1childlib9component25';

describe('Lib1childlib9component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component25 />);
    expect(baseElement).toBeTruthy();
  });
});
