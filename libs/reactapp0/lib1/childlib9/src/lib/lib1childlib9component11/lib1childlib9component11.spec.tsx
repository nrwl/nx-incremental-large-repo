import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component11 from './lib1childlib9component11';

describe('Lib1childlib9component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component11 />);
    expect(baseElement).toBeTruthy();
  });
});
