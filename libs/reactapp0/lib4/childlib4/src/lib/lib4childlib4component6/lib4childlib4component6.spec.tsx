import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component6 from './lib4childlib4component6';

describe('Lib4childlib4component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component6 />);
    expect(baseElement).toBeTruthy();
  });
});
