import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component9 from './lib4childlib7component9';

describe('Lib4childlib7component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component9 />);
    expect(baseElement).toBeTruthy();
  });
});
