import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component23 from './lib3childlib5component23';

describe('Lib3childlib5component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component23 />);
    expect(baseElement).toBeTruthy();
  });
});
