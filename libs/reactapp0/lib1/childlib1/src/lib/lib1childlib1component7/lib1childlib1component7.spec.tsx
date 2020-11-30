import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component7 from './lib1childlib1component7';

describe('Lib1childlib1component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component7 />);
    expect(baseElement).toBeTruthy();
  });
});
