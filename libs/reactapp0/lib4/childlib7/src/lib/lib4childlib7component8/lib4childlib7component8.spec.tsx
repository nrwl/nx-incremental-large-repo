import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component8 from './lib4childlib7component8';

describe('Lib4childlib7component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component8 />);
    expect(baseElement).toBeTruthy();
  });
});
