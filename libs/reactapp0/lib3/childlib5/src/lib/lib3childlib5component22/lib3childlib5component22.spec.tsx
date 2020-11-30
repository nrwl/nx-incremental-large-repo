import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component22 from './lib3childlib5component22';

describe('Lib3childlib5component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component22 />);
    expect(baseElement).toBeTruthy();
  });
});
