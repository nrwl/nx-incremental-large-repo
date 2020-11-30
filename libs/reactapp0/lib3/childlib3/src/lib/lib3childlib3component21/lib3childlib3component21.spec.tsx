import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component21 from './lib3childlib3component21';

describe('Lib3childlib3component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component21 />);
    expect(baseElement).toBeTruthy();
  });
});
