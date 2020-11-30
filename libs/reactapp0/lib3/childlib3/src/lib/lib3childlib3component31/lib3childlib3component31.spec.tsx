import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component31 from './lib3childlib3component31';

describe('Lib3childlib3component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component31 />);
    expect(baseElement).toBeTruthy();
  });
});
