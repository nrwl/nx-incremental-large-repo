import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component17 from './lib3childlib6component17';

describe('Lib3childlib6component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component17 />);
    expect(baseElement).toBeTruthy();
  });
});
