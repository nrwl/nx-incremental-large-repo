import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component3 from './lib3childlib6component3';

describe('Lib3childlib6component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component3 />);
    expect(baseElement).toBeTruthy();
  });
});
