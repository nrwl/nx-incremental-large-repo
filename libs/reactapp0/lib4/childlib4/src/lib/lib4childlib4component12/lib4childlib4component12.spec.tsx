import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component12 from './lib4childlib4component12';

describe('Lib4childlib4component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component12 />);
    expect(baseElement).toBeTruthy();
  });
});
