import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component23 from './lib1childlib8component23';

describe('Lib1childlib8component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component23 />);
    expect(baseElement).toBeTruthy();
  });
});
