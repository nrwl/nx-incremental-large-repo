import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component8 from './lib3childlib6component8';

describe('Lib3childlib6component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component8 />);
    expect(baseElement).toBeTruthy();
  });
});
