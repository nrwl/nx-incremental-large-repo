import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component20 from './lib4childlib7component20';

describe('Lib4childlib7component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component20 />);
    expect(baseElement).toBeTruthy();
  });
});
