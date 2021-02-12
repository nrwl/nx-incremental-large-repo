import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component41 from './lib4childlib3component41';

describe('Lib4childlib3component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component41 />);
    expect(baseElement).toBeTruthy();
  });
});
