import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component17 from './lib4childlib3component17';

describe('Lib4childlib3component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component17 />);
    expect(baseElement).toBeTruthy();
  });
});
