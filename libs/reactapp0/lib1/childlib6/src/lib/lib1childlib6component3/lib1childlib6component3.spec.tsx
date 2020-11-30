import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component3 from './lib1childlib6component3';

describe('Lib1childlib6component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component3 />);
    expect(baseElement).toBeTruthy();
  });
});
