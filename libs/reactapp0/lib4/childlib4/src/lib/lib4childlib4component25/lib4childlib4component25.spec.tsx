import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component25 from './lib4childlib4component25';

describe('Lib4childlib4component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component25 />);
    expect(baseElement).toBeTruthy();
  });
});
