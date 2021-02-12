import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component23 from './lib4childlib7component23';

describe('Lib4childlib7component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component23 />);
    expect(baseElement).toBeTruthy();
  });
});
