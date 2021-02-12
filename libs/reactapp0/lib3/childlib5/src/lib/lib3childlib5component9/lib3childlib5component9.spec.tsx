import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component9 from './lib3childlib5component9';

describe('Lib3childlib5component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component9 />);
    expect(baseElement).toBeTruthy();
  });
});
