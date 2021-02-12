import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component7 from './lib4childlib8component7';

describe('Lib4childlib8component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component7 />);
    expect(baseElement).toBeTruthy();
  });
});
