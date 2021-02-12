import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component20 from './lib1childlib5component20';

describe('Lib1childlib5component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component20 />);
    expect(baseElement).toBeTruthy();
  });
});
