import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component40 from './lib3childlib5component40';

describe('Lib3childlib5component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component40 />);
    expect(baseElement).toBeTruthy();
  });
});
