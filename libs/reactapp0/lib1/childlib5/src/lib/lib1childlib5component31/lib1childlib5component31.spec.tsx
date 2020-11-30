import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component31 from './lib1childlib5component31';

describe('Lib1childlib5component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component31 />);
    expect(baseElement).toBeTruthy();
  });
});
