import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component0 from './lib4childlib4component0';

describe('Lib4childlib4component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component0 />);
    expect(baseElement).toBeTruthy();
  });
});
