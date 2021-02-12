import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component38 from './lib4childlib3component38';

describe('Lib4childlib3component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component38 />);
    expect(baseElement).toBeTruthy();
  });
});
