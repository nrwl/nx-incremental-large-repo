import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component20 from './lib1childlib6component20';

describe('Lib1childlib6component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component20 />);
    expect(baseElement).toBeTruthy();
  });
});
