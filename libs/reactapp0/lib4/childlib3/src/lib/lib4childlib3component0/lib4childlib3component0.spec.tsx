import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component0 from './lib4childlib3component0';

describe('Lib4childlib3component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component0 />);
    expect(baseElement).toBeTruthy();
  });
});
