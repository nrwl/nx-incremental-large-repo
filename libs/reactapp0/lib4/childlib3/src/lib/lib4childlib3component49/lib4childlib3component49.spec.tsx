import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component49 from './lib4childlib3component49';

describe('Lib4childlib3component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component49 />);
    expect(baseElement).toBeTruthy();
  });
});
