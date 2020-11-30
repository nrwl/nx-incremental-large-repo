import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component5 from './lib1childlib6component5';

describe('Lib1childlib6component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component5 />);
    expect(baseElement).toBeTruthy();
  });
});
