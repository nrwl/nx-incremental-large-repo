import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component4 from './lib1childlib3component4';

describe('Lib1childlib3component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component4 />);
    expect(baseElement).toBeTruthy();
  });
});
