import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component40 from './lib1childlib5component40';

describe('Lib1childlib5component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component40 />);
    expect(baseElement).toBeTruthy();
  });
});
