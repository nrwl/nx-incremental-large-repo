import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component11 from './lib4childlib3component11';

describe('Lib4childlib3component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component11 />);
    expect(baseElement).toBeTruthy();
  });
});
