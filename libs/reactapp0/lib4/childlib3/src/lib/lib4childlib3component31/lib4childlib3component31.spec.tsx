import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component31 from './lib4childlib3component31';

describe('Lib4childlib3component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component31 />);
    expect(baseElement).toBeTruthy();
  });
});
