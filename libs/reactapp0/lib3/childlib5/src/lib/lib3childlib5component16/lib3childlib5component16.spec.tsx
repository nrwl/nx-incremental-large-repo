import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component16 from './lib3childlib5component16';

describe('Lib3childlib5component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component16 />);
    expect(baseElement).toBeTruthy();
  });
});
