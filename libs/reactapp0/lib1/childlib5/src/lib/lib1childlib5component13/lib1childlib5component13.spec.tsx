import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component13 from './lib1childlib5component13';

describe('Lib1childlib5component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component13 />);
    expect(baseElement).toBeTruthy();
  });
});
