import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component31 from './lib3childlib5component31';

describe('Lib3childlib5component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component31 />);
    expect(baseElement).toBeTruthy();
  });
});
