import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component44 from './lib4childlib5component44';

describe('Lib4childlib5component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component44 />);
    expect(baseElement).toBeTruthy();
  });
});
