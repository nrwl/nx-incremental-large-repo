import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component45 from './lib4childlib3component45';

describe('Lib4childlib3component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component45 />);
    expect(baseElement).toBeTruthy();
  });
});
