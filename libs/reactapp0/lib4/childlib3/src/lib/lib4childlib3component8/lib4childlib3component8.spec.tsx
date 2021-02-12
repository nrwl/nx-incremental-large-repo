import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component8 from './lib4childlib3component8';

describe('Lib4childlib3component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component8 />);
    expect(baseElement).toBeTruthy();
  });
});
