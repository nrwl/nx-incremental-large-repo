import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component12 from './lib4childlib7component12';

describe('Lib4childlib7component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component12 />);
    expect(baseElement).toBeTruthy();
  });
});
