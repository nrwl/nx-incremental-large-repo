import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component6 from './lib4childlib7component6';

describe('Lib4childlib7component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component6 />);
    expect(baseElement).toBeTruthy();
  });
});
