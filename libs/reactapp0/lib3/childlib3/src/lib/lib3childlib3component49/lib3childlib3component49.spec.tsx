import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component49 from './lib3childlib3component49';

describe('Lib3childlib3component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component49 />);
    expect(baseElement).toBeTruthy();
  });
});
