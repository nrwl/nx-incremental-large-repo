import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component14 from './lib1childlib1component14';

describe('Lib1childlib1component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component14 />);
    expect(baseElement).toBeTruthy();
  });
});
