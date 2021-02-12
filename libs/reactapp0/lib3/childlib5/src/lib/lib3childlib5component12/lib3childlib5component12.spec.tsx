import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component12 from './lib3childlib5component12';

describe('Lib3childlib5component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component12 />);
    expect(baseElement).toBeTruthy();
  });
});
