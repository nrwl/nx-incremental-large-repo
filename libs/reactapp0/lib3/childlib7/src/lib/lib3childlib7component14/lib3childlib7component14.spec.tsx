import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib7component14 from './lib3childlib7component14';

describe('Lib3childlib7component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib7component14 />);
    expect(baseElement).toBeTruthy();
  });
});
