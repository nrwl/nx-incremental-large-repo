import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component19 from './lib3childlib4component19';

describe('Lib3childlib4component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component19 />);
    expect(baseElement).toBeTruthy();
  });
});
