import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component2 from './lib4childlib4component2';

describe('Lib4childlib4component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component2 />);
    expect(baseElement).toBeTruthy();
  });
});
