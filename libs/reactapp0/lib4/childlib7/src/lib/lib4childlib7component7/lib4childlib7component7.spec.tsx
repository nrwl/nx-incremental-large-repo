import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component7 from './lib4childlib7component7';

describe('Lib4childlib7component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component7 />);
    expect(baseElement).toBeTruthy();
  });
});
