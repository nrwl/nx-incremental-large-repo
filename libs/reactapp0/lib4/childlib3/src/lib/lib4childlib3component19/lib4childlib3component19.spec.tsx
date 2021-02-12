import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component19 from './lib4childlib3component19';

describe('Lib4childlib3component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component19 />);
    expect(baseElement).toBeTruthy();
  });
});
