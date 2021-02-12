import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component16 from './lib4childlib7component16';

describe('Lib4childlib7component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component16 />);
    expect(baseElement).toBeTruthy();
  });
});
