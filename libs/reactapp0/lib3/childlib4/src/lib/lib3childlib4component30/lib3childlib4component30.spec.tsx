import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component30 from './lib3childlib4component30';

describe('Lib3childlib4component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component30 />);
    expect(baseElement).toBeTruthy();
  });
});
