import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component4 from './lib1childlib5component4';

describe('Lib1childlib5component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component4 />);
    expect(baseElement).toBeTruthy();
  });
});
