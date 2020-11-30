import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component4 from './lib4childlib4component4';

describe('Lib4childlib4component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component4 />);
    expect(baseElement).toBeTruthy();
  });
});
