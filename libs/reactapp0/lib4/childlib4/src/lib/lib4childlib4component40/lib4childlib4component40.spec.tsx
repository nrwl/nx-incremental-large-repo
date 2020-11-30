import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component40 from './lib4childlib4component40';

describe('Lib4childlib4component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component40 />);
    expect(baseElement).toBeTruthy();
  });
});
