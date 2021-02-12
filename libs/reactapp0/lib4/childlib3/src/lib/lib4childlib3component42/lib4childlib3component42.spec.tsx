import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component42 from './lib4childlib3component42';

describe('Lib4childlib3component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component42 />);
    expect(baseElement).toBeTruthy();
  });
});
