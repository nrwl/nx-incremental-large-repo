import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component35 from './lib3childlib2component35';

describe('Lib3childlib2component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component35 />);
    expect(baseElement).toBeTruthy();
  });
});
