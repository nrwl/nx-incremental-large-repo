import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component48 from './lib4childlib4component48';

describe('Lib4childlib4component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component48 />);
    expect(baseElement).toBeTruthy();
  });
});
