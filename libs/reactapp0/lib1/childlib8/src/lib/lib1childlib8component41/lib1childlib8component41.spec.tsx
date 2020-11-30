import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component41 from './lib1childlib8component41';

describe('Lib1childlib8component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component41 />);
    expect(baseElement).toBeTruthy();
  });
});
