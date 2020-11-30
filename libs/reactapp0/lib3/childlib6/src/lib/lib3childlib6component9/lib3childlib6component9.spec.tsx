import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component9 from './lib3childlib6component9';

describe('Lib3childlib6component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component9 />);
    expect(baseElement).toBeTruthy();
  });
});
