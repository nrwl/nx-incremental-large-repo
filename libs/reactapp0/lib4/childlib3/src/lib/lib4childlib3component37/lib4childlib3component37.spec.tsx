import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component37 from './lib4childlib3component37';

describe('Lib4childlib3component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component37 />);
    expect(baseElement).toBeTruthy();
  });
});
