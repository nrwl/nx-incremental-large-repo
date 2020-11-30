import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component19 from './lib3childlib3component19';

describe('Lib3childlib3component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component19 />);
    expect(baseElement).toBeTruthy();
  });
});
