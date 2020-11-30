import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component18 from './lib4childlib6component18';

describe('Lib4childlib6component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component18 />);
    expect(baseElement).toBeTruthy();
  });
});
