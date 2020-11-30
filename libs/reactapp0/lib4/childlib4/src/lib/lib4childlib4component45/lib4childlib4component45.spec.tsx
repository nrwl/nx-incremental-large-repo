import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component45 from './lib4childlib4component45';

describe('Lib4childlib4component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component45 />);
    expect(baseElement).toBeTruthy();
  });
});
