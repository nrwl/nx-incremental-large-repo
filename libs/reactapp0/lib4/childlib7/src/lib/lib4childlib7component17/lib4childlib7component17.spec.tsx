import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component17 from './lib4childlib7component17';

describe('Lib4childlib7component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component17 />);
    expect(baseElement).toBeTruthy();
  });
});
