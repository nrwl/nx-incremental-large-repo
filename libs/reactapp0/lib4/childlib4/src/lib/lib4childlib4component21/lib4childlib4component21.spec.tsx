import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component21 from './lib4childlib4component21';

describe('Lib4childlib4component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component21 />);
    expect(baseElement).toBeTruthy();
  });
});
