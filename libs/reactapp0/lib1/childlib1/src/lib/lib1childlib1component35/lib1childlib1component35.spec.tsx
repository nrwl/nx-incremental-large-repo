import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component35 from './lib1childlib1component35';

describe('Lib1childlib1component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component35 />);
    expect(baseElement).toBeTruthy();
  });
});
