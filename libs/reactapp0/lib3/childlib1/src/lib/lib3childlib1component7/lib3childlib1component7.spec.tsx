import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component7 from './lib3childlib1component7';

describe('Lib3childlib1component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component7 />);
    expect(baseElement).toBeTruthy();
  });
});
