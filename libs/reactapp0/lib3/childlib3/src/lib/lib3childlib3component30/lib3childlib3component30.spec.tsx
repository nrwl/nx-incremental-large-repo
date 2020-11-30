import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component30 from './lib3childlib3component30';

describe('Lib3childlib3component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component30 />);
    expect(baseElement).toBeTruthy();
  });
});
