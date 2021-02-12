import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component14 from './lib1childlib3component14';

describe('Lib1childlib3component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component14 />);
    expect(baseElement).toBeTruthy();
  });
});
