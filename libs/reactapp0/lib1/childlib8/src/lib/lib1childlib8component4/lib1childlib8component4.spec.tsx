import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component4 from './lib1childlib8component4';

describe('Lib1childlib8component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component4 />);
    expect(baseElement).toBeTruthy();
  });
});
