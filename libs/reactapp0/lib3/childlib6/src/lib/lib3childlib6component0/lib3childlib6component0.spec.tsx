import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component0 from './lib3childlib6component0';

describe('Lib3childlib6component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component0 />);
    expect(baseElement).toBeTruthy();
  });
});
