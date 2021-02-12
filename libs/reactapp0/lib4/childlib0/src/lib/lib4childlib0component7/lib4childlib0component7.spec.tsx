import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component7 from './lib4childlib0component7';

describe('Lib4childlib0component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component7 />);
    expect(baseElement).toBeTruthy();
  });
});
