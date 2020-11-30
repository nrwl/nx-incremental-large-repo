import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component28 from './lib4childlib3component28';

describe('Lib4childlib3component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component28 />);
    expect(baseElement).toBeTruthy();
  });
});
