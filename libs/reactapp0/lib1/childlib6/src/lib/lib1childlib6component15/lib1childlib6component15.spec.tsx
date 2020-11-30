import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component15 from './lib1childlib6component15';

describe('Lib1childlib6component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component15 />);
    expect(baseElement).toBeTruthy();
  });
});
