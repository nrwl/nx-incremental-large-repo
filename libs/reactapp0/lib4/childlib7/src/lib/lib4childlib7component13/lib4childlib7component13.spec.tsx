import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component13 from './lib4childlib7component13';

describe('Lib4childlib7component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component13 />);
    expect(baseElement).toBeTruthy();
  });
});
