import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component33 from './lib3childlib2component33';

describe('Lib3childlib2component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component33 />);
    expect(baseElement).toBeTruthy();
  });
});
