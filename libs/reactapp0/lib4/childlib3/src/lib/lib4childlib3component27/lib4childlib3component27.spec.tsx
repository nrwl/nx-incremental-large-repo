import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component27 from './lib4childlib3component27';

describe('Lib4childlib3component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component27 />);
    expect(baseElement).toBeTruthy();
  });
});
