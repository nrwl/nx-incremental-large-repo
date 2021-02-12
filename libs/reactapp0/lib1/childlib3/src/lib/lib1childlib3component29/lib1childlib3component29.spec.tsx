import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component29 from './lib1childlib3component29';

describe('Lib1childlib3component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component29 />);
    expect(baseElement).toBeTruthy();
  });
});
