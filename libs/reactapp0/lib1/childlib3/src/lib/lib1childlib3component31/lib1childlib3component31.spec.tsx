import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component31 from './lib1childlib3component31';

describe('Lib1childlib3component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component31 />);
    expect(baseElement).toBeTruthy();
  });
});
