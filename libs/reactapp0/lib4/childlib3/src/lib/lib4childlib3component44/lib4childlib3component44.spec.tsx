import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component44 from './lib4childlib3component44';

describe('Lib4childlib3component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component44 />);
    expect(baseElement).toBeTruthy();
  });
});
