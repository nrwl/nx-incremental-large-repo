import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component7 from './lib1childlib3component7';

describe('Lib1childlib3component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component7 />);
    expect(baseElement).toBeTruthy();
  });
});
