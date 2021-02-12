import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component45 from './lib1childlib8component45';

describe('Lib1childlib8component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component45 />);
    expect(baseElement).toBeTruthy();
  });
});
