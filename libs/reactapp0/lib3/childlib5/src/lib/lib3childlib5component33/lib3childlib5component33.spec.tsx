import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component33 from './lib3childlib5component33';

describe('Lib3childlib5component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component33 />);
    expect(baseElement).toBeTruthy();
  });
});
