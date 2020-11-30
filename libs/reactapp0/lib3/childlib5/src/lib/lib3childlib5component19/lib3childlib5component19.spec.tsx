import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component19 from './lib3childlib5component19';

describe('Lib3childlib5component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component19 />);
    expect(baseElement).toBeTruthy();
  });
});
