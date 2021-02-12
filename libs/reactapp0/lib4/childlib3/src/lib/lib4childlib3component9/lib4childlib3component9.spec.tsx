import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component9 from './lib4childlib3component9';

describe('Lib4childlib3component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component9 />);
    expect(baseElement).toBeTruthy();
  });
});
