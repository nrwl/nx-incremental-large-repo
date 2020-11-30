import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component21 from './lib1childlib6component21';

describe('Lib1childlib6component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component21 />);
    expect(baseElement).toBeTruthy();
  });
});
