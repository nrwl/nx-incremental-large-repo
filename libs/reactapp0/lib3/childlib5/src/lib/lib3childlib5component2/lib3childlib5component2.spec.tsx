import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component2 from './lib3childlib5component2';

describe('Lib3childlib5component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component2 />);
    expect(baseElement).toBeTruthy();
  });
});
