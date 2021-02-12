import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component4 from './lib3childlib2component4';

describe('Lib3childlib2component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component4 />);
    expect(baseElement).toBeTruthy();
  });
});
