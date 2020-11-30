import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component42 from './lib1childlib6component42';

describe('Lib1childlib6component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component42 />);
    expect(baseElement).toBeTruthy();
  });
});
