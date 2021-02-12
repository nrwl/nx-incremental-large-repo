import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component45 from './lib3childlib3component45';

describe('Lib3childlib3component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component45 />);
    expect(baseElement).toBeTruthy();
  });
});
