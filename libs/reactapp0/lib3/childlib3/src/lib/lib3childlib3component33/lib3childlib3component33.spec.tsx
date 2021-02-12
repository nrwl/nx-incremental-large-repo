import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component33 from './lib3childlib3component33';

describe('Lib3childlib3component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component33 />);
    expect(baseElement).toBeTruthy();
  });
});
