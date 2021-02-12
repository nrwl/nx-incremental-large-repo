import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component0 from './lib4childlib6component0';

describe('Lib4childlib6component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component0 />);
    expect(baseElement).toBeTruthy();
  });
});
