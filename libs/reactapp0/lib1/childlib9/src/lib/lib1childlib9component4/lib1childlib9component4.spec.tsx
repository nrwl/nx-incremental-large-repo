import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component4 from './lib1childlib9component4';

describe('Lib1childlib9component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component4 />);
    expect(baseElement).toBeTruthy();
  });
});
