import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component8 from './lib1childlib6component8';

describe('Lib1childlib6component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component8 />);
    expect(baseElement).toBeTruthy();
  });
});
