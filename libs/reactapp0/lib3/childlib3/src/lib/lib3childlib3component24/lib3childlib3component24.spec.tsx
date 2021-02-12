import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component24 from './lib3childlib3component24';

describe('Lib3childlib3component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component24 />);
    expect(baseElement).toBeTruthy();
  });
});
