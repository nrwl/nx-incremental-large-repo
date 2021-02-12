import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component4 from './lib3childlib7component4';

describe('Lib3childlib7component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component4 />);
    expect(baseElement).toBeTruthy();
  });
});
