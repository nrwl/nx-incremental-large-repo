import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component15 from './lib4childlib7component15';

describe('Lib4childlib7component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component15 />);
    expect(baseElement).toBeTruthy();
  });
});
