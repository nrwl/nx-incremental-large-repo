import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component15 from './lib3childlib5component15';

describe('Lib3childlib5component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component15 />);
    expect(baseElement).toBeTruthy();
  });
});
