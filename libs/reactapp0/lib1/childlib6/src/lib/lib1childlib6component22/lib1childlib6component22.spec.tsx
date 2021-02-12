import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component22 from './lib1childlib6component22';

describe('Lib1childlib6component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component22 />);
    expect(baseElement).toBeTruthy();
  });
});
