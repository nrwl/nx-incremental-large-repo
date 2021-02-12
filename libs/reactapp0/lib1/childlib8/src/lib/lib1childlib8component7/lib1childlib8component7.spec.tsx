import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component7 from './lib1childlib8component7';

describe('Lib1childlib8component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component7 />);
    expect(baseElement).toBeTruthy();
  });
});
