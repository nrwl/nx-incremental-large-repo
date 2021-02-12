import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component4 from './lib3childlib4component4';

describe('Lib3childlib4component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component4 />);
    expect(baseElement).toBeTruthy();
  });
});
