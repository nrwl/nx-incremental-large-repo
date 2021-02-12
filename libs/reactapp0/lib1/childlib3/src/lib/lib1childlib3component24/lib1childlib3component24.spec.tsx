import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component24 from './lib1childlib3component24';

describe('Lib1childlib3component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component24 />);
    expect(baseElement).toBeTruthy();
  });
});
