import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component7 from './lib4childlib3component7';

describe('Lib4childlib3component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component7 />);
    expect(baseElement).toBeTruthy();
  });
});
