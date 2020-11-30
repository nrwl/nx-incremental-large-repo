import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component28 from './lib1childlib3component28';

describe('Lib1childlib3component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component28 />);
    expect(baseElement).toBeTruthy();
  });
});
