import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component21 from './lib3childlib6component21';

describe('Lib3childlib6component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component21 />);
    expect(baseElement).toBeTruthy();
  });
});
