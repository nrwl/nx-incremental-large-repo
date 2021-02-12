import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component43 from './lib3childlib5component43';

describe('Lib3childlib5component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component43 />);
    expect(baseElement).toBeTruthy();
  });
});
