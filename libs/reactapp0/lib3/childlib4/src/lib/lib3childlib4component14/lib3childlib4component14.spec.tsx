import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component14 from './lib3childlib4component14';

describe('Lib3childlib4component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component14 />);
    expect(baseElement).toBeTruthy();
  });
});
