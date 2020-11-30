import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component30 from './lib4childlib4component30';

describe('Lib4childlib4component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component30 />);
    expect(baseElement).toBeTruthy();
  });
});
