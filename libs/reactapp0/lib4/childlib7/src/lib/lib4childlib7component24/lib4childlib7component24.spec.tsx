import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component24 from './lib4childlib7component24';

describe('Lib4childlib7component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component24 />);
    expect(baseElement).toBeTruthy();
  });
});
