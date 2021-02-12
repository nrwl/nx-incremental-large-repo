import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component7 from './lib4childlib4component7';

describe('Lib4childlib4component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component7 />);
    expect(baseElement).toBeTruthy();
  });
});
