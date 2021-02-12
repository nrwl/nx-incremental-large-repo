import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component33 from './lib1childlib8component33';

describe('Lib1childlib8component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component33 />);
    expect(baseElement).toBeTruthy();
  });
});
