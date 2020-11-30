import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component11 from './lib1childlib8component11';

describe('Lib1childlib8component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component11 />);
    expect(baseElement).toBeTruthy();
  });
});
