import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component8 from './lib1childlib5component8';

describe('Lib1childlib5component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component8 />);
    expect(baseElement).toBeTruthy();
  });
});
